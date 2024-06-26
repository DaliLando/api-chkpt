import axios from "axios";
import {useEffect, useState } from "react";
import UserList from "./components/UserList"

function App() {

  const [list,setList]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> setList(res.data))
    .catch ((err)=>{
      console.error(err);
    })
  },[])
  console.log(list);
  return (
    <div>
       <UserList list={list}/>
    </div>
  );
}

export default App;
