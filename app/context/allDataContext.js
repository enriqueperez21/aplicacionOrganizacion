import { useState, createContext, useContext, useEffect } from "react"
import { getAllDataUser } from "../../services/apiGet/getAllData"

const context = createContext()

export const useData = () =>{
  return useContext(context)
}

export const DataProvider = ({children}) =>{
  const [allData, setAllData] = useState(null)
  const [category, setCategory] = useState({})
  const [subCategory, setSubCategory] = useState({})

  const getAndSetAllData = async() => {
    const res = await getAllDataUser("test@gmail.com")
    setAllData(res)
  }

  useEffect(() =>{
    getAndSetAllData()
  }, [])
  return (
    <context.Provider value={{
      allData,
      category,
      subCategory,
      setCategory,
      setSubCategory,
    }}>
      {children}
    </context.Provider>)
  
}