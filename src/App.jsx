import { useState, useEffect } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  //responsible for showing and hiding the information modal
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  
  //responsible for making api calls to nasa.
  useEffect(() => {
    async function fetchAPIData(){
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`

      //checking if the user has already got the data today
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched from api today')
        console.log('DATA\n', apiData)
      } 
      catch (err) {
        console.log(err.message)
      }
    }

    fetchAPIData()
  }, [])

  return (
    <> 
      {data ? (<Main data = {data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Sidebar data = {data} handleToggleModal = {handleToggleModal}/>

      )}
      {data && (
        <Footer data = {data} handleToggleModal = {handleToggleModal}/>
      )}
    </>
  )
}

export default App
