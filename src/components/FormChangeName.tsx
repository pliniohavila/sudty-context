import { useContext } from 'react'
import { FormContext } from '../contexts/FormContextProvider'
import './styles.css'

export function FormChangeName() {
  const { data, handleSetData} = useContext(FormContext)

  function handleSave(event: any) {
    event.preventDefault()
    const { name } = event.currentTarget
    const newDataForm = {
      ...data, 
      name: name.value
    }
    handleSetData(newDataForm)
  }

  return (
    <form onSubmit={handleSave}>
      <h1>Change Name</h1>
      <div className="input-data">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder={data.name}/>
      </div>
      <div>
        <h3>Age: {data.age}</h3>
        <h3>Job: {data.job}</h3>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}