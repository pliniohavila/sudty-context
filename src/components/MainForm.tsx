import React, { useContext, useState } from 'react'
import { FormContext } from '../contexts/FormContextProvider'
import './styles.css'


export function MainForm() {
  const {data, handleSetData} = useContext(FormContext)

  function handleSave(event: any) {
    event.preventDefault()
    const {name, age, job} = event.currentTarget
    const newDataForm = {
      name: name.value,
      age: +age.value, // The + operator is to convert string to number
      job: job.value
    }
    handleSetData(newDataForm)
  }

  return (
    <form onSubmit={handleSave}>
      <h1>Form User Data Input</h1>
        <div className="input-data">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="input-data">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" />
        </div>
        <div className="input-data">
          <label htmlFor="job">Job:</label>
          <input type="text" name="job" />
        </div>
      <button type="submit">Save</button>
      <pre>
        {JSON.stringify(data)} <br />
      </pre>
    </form>
  )
}