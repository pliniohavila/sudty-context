import { createContext, ReactNode, useState } from "react"

type TDataForm = {
    name: string, 
    age: number, 
    job: string
}

interface FormContextProps {
  data: TDataForm, 
  handleSetData: (dataForm: any) => void
}

export const FormContext = createContext({} as FormContextProps) 


type FormContextProviderProps = {
  children: ReactNode
}

export function FormContextProvider({children}: FormContextProviderProps) {
  const [data, setData] = useState({
    name: '',
    age: 0,
    job: ''
  })

  function handleSetData(dataForm: TDataForm) {
    setData(dataForm)
  }

  const valueProvider = {
    data, 
    handleSetData
  }

  return (
    <FormContext.Provider value={valueProvider}>
      {children}
    </FormContext.Provider>
  )
}