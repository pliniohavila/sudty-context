import './styles.css'

export function FormChangeName() {

  return (
    <form onSubmit={() => {}}>
      <h1>Change Name</h1>
      <div className="input-data">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <h3>Age: _age_</h3>
        <h3>Job: _job_</h3>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}