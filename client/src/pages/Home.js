import React from 'react'
import StudentsTable from '../components/StudentsTable'
import { useQuery } from '@apollo/client'
import { USERS } from '../services/apollo/queries'

const Home = () => {
  const { loading, error, data } = useQuery(USERS)

  return (
    <div className="flex-container">
      <h2>Students</h2>
      <StudentsTable loading={loading} error={error} data={data} />
    </div>
  )
}

export default Home
