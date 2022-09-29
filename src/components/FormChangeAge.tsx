
import './styles.css'

export function FormChangeAge() {

  return (
    <form onSubmit={() => {}}>
      <h1>Change Age</h1>
      <div>
      <h3>Name: _name_</h3>
        <div className="input-data">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" />
        </div>
        <h3>Job: _job_</h3>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}