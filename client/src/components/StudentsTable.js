import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
]

const StudentsTable = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const dataSource = data.students

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="id"
      style={{ width: '80vw' }}
    />
  )
}

export default StudentsTable
