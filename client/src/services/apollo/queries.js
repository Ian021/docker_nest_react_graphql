import { gql } from '@apollo/client'

const USERS = gql`
  query {
    users {
      id
      nome
      email
      cpf
    }
  }
`

export { USERS }
