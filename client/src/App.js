import React, {useEffect, useState} from 'react'

function App() {
  
    const [backendData, setBackendData] = useState([{}])
    useEffect(()=>{
      fetch("/api/lancamentos").then(
        response =>response.json()
        ).then(
        data => setBackendData(data)
        ).then(console.log(backendData))
    },[])
    return(
    <div>
      {(typeof backendData === "undefined") ? 
        (
          <p> carregando... </p>
        ):
        (
          <p>{backendData.toString()} </p>
        )
      
    }
    </div>
  )
}

export default App