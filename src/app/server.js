const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    formDataList: [FormData!]!
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
    formDataList: () => [
      {
        nomeCompleto: "Vitor Menezes",
        email: "vitor@example.com",
        dataNascimento: "2001-05-19",
        naturalidade: "Brasileiro",
        telefone: "11-987654321",
        sexo: "masculino",
      },
      {
        nomeCompleto: "Maria Silva",
        email: "maria.silva@example.com",
        dataNascimento: "1995-07-10",
        naturalidade: "Brasileira",
        telefone: "21-987654321",
        sexo: "feminino",
      },
    ],
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`Servidor rodando em ${url}`);
});
