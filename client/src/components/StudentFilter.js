import React from 'react'
import { Input, Select } from 'antd'

const StudentFilter = ({
  text,
  updateText,
  filter,
  changeFilter,
  filterOptions,
}) => {
  const onChange = (event) => {
    updateText(event.target.value)
  }

  return (
    <Input
      style={{ width: '80vw' }}
      onChange={onChange}
      value={text}
      placeholder="search"
      addonBefore={
        <Select
          defaultValue={filter}
          style={{ width: 150 }}
          onChange={changeFilter}
          filter={filter}
        >
          {filterOptions.map((entry) => (
            <Select.Option key={entry.filter}>{entry.value}</Select.Option>
          ))}
        </Select>
      }
    />
  )
}

export default StudentFilter
