import React from 'react'

const StudentsTable = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.users.map(({ id, nome, email, cpf }) => (
    <div key={id}>
      <p>
        {nome} - {email} - {cpf}
      </p>
    </div>
  ))
}

export default StudentsTable
