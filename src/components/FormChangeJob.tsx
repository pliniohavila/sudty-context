import { useContext } from 'react'
import { FormContext } from '../contexts/FormContextProvider'
import './styles.css'

export function FormChangeJob() {
  const { data, handleSetData} = useContext(FormContext)

  function handleSave(event: any) {
    event.preventDefault()
    const { job } = event.currentTarget
    const newDataForm = {
      ...data, 
      job: job.value
    }
    handleSetData(newDataForm)
  }

  return (
    <form onSubmit={handleSave}>
      <h1>Change Job</h1>
      <div>
        <h3>Name: {data.name}</h3>
        <h3>Age: {data.age}</h3>
        <div className="input-data">
          <label htmlFor="job">Job:</label>
          <input type="text" name="job" placeholder={data.job}/>
        </div>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}