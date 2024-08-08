import React, { useState } from 'react'
import Githubprofile from './component/Githubprofile'

const App = () => {
  const [name,setname]=useState("")
  const handlechange=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <h1>Profiles</h1>
      <form onSubmit={handlechange}>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} name="" id="" />
      <Githubprofile username={name}/>
      </form>
    </div>
  )
}

export default App