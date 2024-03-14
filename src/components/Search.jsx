import React, { useEffect, useState } from 'react'
import User from './User.jsx'

export default function Search() {
    //holds username default my username
    const [username, setUsername] = useState('')
    const [userdata, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    //Github api fetch
    async function fetchGithubUserData(){

      setLoading(true)

      const res = await fetch(`https://api.github.com/users/${username}`) 
      const data = await res.json()
      console.log(data)

      if(data){
        //use data as input for setUserData
        setUserData(data)
        setLoading(false)
        setUsername('')
      }
   }
    
    //handles search button
   function handleSubmit(){
    fetchGithubUserData()
   } 

   //on page load call github api 
   useEffect(()=>{
      fetchGithubUserData()
   },[])

   if(loading){
    return (
      <img
    alt="loading"
    src="src\assets\loading\load-35_128.gif"
    width="100"
    height="100"
    className="gif"
  /> 
    )
   }



  return (
    <div className="search">
        <div className="input-wrapper searchbar">
        <input 
        type="text"
        name="search-github-profiles"
        placeholder="search a profile...."
        value={username}
        onChange={(event) =>{setUsername(event.target.value)}}
        />
        <button onClick={handleSubmit} className="input-wrapper search-button">search</button>


        {/* //Handle user card */}
        </div>
        {userdata !== null ? <User user={userdata}/>:null} 
    </div>
  )
}
