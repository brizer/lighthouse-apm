import { queryUrlTask } from "../runner";

const UrlResolver = {
  Mutation: {
    queryUrl: async (_, { url }, __) => {
      console.log(url);
      const { reportHtml } = await queryUrlTask(url);
      return { success: true, content: reportHtml };
    },
  },
};

export default UrlResolver;
