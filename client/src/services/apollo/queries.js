import { gql } from '@apollo/client'

const USERS = gql`
  query users($nome: String, $cpf: Int, $email: String) {
    users(nome: $nome, cpf: $cpf, email: $email) {
      id
      nome
      email
      cpf
    }
  }
`

export { USERS }
