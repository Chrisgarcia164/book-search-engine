import gql from "graph1l-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      books {
        _id
        authors
        title
        image
        description
        bookId
        link
      }
    }
  }
`;
