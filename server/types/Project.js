const { gql } = require('apollo-server');

module.exports = gql`
    # Define the structure for a project
    type Project{
        id: ID!
        name: String!
        description: String!
        stack: String!
        github: String
        url: String
        img: String
        tasks: [String!]!
        start_date: String!
        end_date: String!
    }

    # Returns an array of projects
    type Query{
        projects: [Project]
    }
`;

