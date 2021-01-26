import lighthouse from "lighthouse";
import fs from "fs";
import * as chromeLauncher from "chrome-launcher";

async function queryUrlTask(url: string) {
  // Catching an error
  try {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
      logLevel: "error",
      output: "html",
      //   onlyCategories: ["performance"],
      port: chrome.port,
    };
    const runnerResult = await lighthouse(url, options);

    const reportHtml = runnerResult.report;
    console.log("Report is done for", runnerResult.lhr.finalUrl);
    console.log(
      "Performance score was",
      runnerResult.lhr.categories.performance.score * 100
    );
    fs.writeFileSync("lhreport.html", reportHtml);
    await chrome.kill();
    return {
      reportHtml,
    };
  } catch (error) {
    console.log(error);
  }
}

export { queryUrlTask };
