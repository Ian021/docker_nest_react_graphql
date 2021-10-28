import React from 'react'
import StudentsTable from '../components/StudentsTable'

import { useQuery } from '@apollo/client'
import { USERS } from '../services/apollo/queries'
import { Space } from 'antd'

const Home = () => {
  const { loading, error, data } = useQuery(USERS)

  return (
    <div className="flex-container">
      <Space style={{ flexDirection: 'column' }}>
        <h2>Students</h2>

        <StudentsTable loading={loading} error={error} data={data} />
      </Space>
    </div>
  )
}

export default Home
