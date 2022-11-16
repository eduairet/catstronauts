const { gql } = require('apollo-server');

const typeDefs = gql`
    """
    Entry points defined in the Query type
    """
    type Query {
        tracksForHome: [Track!]!
    }

    """
    A track is a group of modules that teaches about a specific topic
    """
    type Track {
        id: ID!
        title: String!
        author: Author!
        "URL to thumbnail"
        thumbnail: String
        "Track's approximate length to complete (minutes)"
        length: Int
        "Modules contained in this track"
        modulesCount: Int
    }

    """
    Author of a track
    """
    type Author {
        "Author must exist"
        id: ID!
        name: String!
        "URL to avatar"
        photo: String
    }
`;

module.exports = typeDefs;
