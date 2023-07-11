const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    cars: [Car]
  }

  type Car {
    id: Int
    make: String
    model: String
    year: Int
  }
`);

module.exports = schema;