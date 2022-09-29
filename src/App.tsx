import './App.css'
import { FormChangeAge } from './components/FormChangeAge'
import { FormChangeJob } from './components/FormChangeJob'


import { FormChangeName } from './components/FormChangeName'
import { MainForm } from './components/MainForm'

function App() {
  return (
    <div className="App">
        <MainForm />
        <div className="container">
          <FormChangeName />
          <FormChangeAge />
          <FormChangeJob />
        </div>
    </div>
  )
}

export default App
