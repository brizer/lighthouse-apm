import lighthouse from "lighthouse";
const {URL} = require('url');
import puppeteer from "puppeteer";

async function queryUrlTask(url: string) {
  // Catching an error
  try {

    // Use Puppeteer to launch headful Chrome and don't use its default 800x600 viewport.
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
      // executablePath: '/usr/bin/chromium-browser',
      args:['--no-sandbox']
    });

    // Wait for Lighthouse to open url, then inject our stylesheet.
    browser.on("targetchanged", async (target) => {
      const page = await target.page();
      if (page && page.url() === url) {
        await page.addStyleTag({ content: "* {color: red}" });
      }
    });

    // Lighthouse will open the URL.
    // Puppeteer will observe `targetchanged` and inject our stylesheet.
    const runnerResult = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "html",
      logLevel: "info",
    });
    const reportHtml = runnerResult.report;
    console.log("Report is done for", runnerResult.lhr.finalUrl);
    console.log(
      "Performance score was",
      runnerResult.lhr.categories.performance.score * 100
    );
    return {
      reportHtml,
    };
  } catch (error) {
    console.log(error);
  }
}

export { queryUrlTask };
