import './styles.css'


export function MainForm() {

  return (
    <form onSubmit={() => {}}>
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
    </form>
  )
}