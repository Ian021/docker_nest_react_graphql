import React, { useState } from 'react'
import StudentsTable from '../components/StudentsTable'
import StudentFilter from '../components/StudentFilter'
import { useQuery } from '@apollo/client'
import { USERS } from '../services/apollo/queries'
import { Space } from 'antd'

const filterOptions = [
  { filter: 'nome', value: 'Nome' },
  { filter: 'cpf', value: 'CPF' },
  { filter: 'email', value: 'Email' },
]

const Home = () => {
  const { loading, error, data } = useQuery(USERS)

  const [text, setText] = useState('')
  const [filter, setFilter] = useState(filterOptions[0].filter)
  const changeFilter = (newFilter) => {
    setFilter(newFilter)
    setText('')
  }

  return (
    <div className="flex-container">
      <Space style={{ flexDirection: 'column' }}>
        <h2>Alunos</h2>
        <StudentFilter
          text={text}
          setText={setText}
          filterOptions={filterOptions}
          filter={filter}
          changeFilter={changeFilter}
        />
        <StudentsTable loading={loading} error={error} data={data} />
      </Space>
    </div>
  )
}

export default Home
