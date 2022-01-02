const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Book {},
type User {},
type Query {},
type Auth {},
type Mutation {}

`;
module.exports = typeDefs;
