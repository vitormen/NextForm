const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    formData: FormData
  }

  type FormData {
    nomeCompleto: String!
    email: String!
    dataNascimento: String!
    naturalidade: String!
    telefone: String!
    sexo: String!
  }
`;

const mocks = {
  Query: () => ({
    formData: () => ({
      nomeCompleto: "vitor menezes",
      email: "vitor@example.com",
      dataNascimento: "2001-05-19",
      naturalidade: "Brasileiro",
      telefone: "11-987654321",
      sexo: "masculino",
    }),
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`Servidor rodando em ${url}`);
});
