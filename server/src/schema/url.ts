import { gql } from "apollo-server";
const UrlType = gql`
  type Query {
    me: Boolean
  }
  # Mutation 写操作
  type Mutation {
    queryUrl(url: String!): QueryUrlResponse
  }
  type QueryUrlResponse {
    success: Boolean!
    content: String
  }
`;

export default UrlType;
