import { gql } from '@apollo/client'

const STUDENTS = gql`
  query students($nome: String, $cpf: String, $email: String) {
    students(nome: $nome, cpf: $cpf, email: $email) {
      id
      nome
      email
      cpf
    }
  }
`

export { STUDENTS }
