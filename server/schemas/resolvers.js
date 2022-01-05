const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You are not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args, contexxt) => {
      const user = await user.create(args);
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found");
      }
      const correctPw = await User.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(user);
      return { user, token };
    },
    saveBook: async (parent, { profileId, book }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: profileId },
          { $addToSet: { books: book } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("You are not logged in");
    },
    removeBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: _id },
          { $pull: { savedBooks: { bookId } } },
          { new: true, runValidators: true }
        );
        return { updatedUser };
      }
      throw new AuthenticationError("You are not logged in");
    },
  },
};
module.exports = resolvers;
