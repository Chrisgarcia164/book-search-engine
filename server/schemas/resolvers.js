const { user, book } = require("../models");
const { signToken } = require("../utils/auth");
const { authenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async () => {},
  },
  Mutation: {
    login: async () => {},
    addUser: async () => {},
    saveBook: async () => {},
    removeBook: async () => {},
  },
};
module.exports = resolvers;
