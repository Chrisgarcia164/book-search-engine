const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    link: String
    image: String
    title: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }
  type Query {
    me: User
  }
  input BookInput {
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String!
  }
  type Auth {
    toke: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;
