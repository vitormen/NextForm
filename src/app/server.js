const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const getFormDataList = () => {
  const data = fs.readFileSync(path.resolve(__dirname, '../../db.json'), 'utf-8');
  return JSON.parse(data).formDataList;
};

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


const resolvers = {
  Query: {
    formDataList: () => getFormDataList(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Servidor rodando em ${url}`);
});
