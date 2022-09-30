import { useContext } from 'react'
import { FormContext } from '../contexts/FormContextProvider'
import './styles.css'

export function FormChangeAge() {
  const {data, handleSetData} = useContext(FormContext)

  function handleSave(event: any) {
    event.preventDefault()
    const { age } = event.currentTarget
    const newDataForm = {
      ...data, 
      age: age.value
    }
    handleSetData(newDataForm)
  }

  return (
    <form onSubmit={handleSave}>
      <h1>Change Age</h1>
      <div>
      <h3>Name: {data.name}</h3>
        <div className="input-data">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" placeholder={String(data.age)} />
        </div>
        <h3>Job: {data.job}</h3>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}