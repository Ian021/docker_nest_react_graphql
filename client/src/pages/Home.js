import React, { useEffect, useState } from 'react'
import StudentsTable from '../components/StudentsTable'
import StudentFilter from '../components/StudentFilter'
import { useQuery } from '@apollo/client'
import { STUDENTS } from '../services/apollo/queries'
import { Space } from 'antd'

const filterOptions = [
  { filter: 'nome', value: 'Nome' },
  { filter: 'cpf', value: 'CPF' },
  { filter: 'email', value: 'Email' },
]

const Home = () => {
  const [text, setText] = useState('')
  const [filter, setFilter] = useState(filterOptions[0].filter)

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
    setText('')
  }

  const updateText = (newText) => {
    setText(newText)
  }

  useEffect(() => {
    query.refetch({ [filter]: text })
  }, [text, filter])

  const query = useQuery(STUDENTS, {
    variables: {
      [filter]: text,
    },
  })
  const { loading, error, data } = query

  return (
    <div className="flex-container">
      <Space style={{ flexDirection: 'column' }}>
        <h2>Alunos</h2>
        <StudentFilter
          text={text}
          updateText={updateText}
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
