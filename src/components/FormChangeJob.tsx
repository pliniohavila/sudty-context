import './styles.css'

export function FormChangeJob() {

  return (
    <form onSubmit={() => {}}>
      <h1>Change Job</h1>
      <div>
        <h3>Name: _name_</h3>
        <h3>Age: _age_</h3>
        <div className="input-data">
          <label htmlFor="job">Job:</label>
          <input type="text" name="job" />
        </div>
      </div>
      <button type="submit">Change</button>
    </form>
  )
}