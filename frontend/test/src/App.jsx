import {useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [uData, setUsers] = useState([]);

  /** function to fetch users form backend using axiso */
  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/StudentInfoPage");
    if (response.data) {
      
      setUsers(response.data);
    }
    console.log(response);
  };

    /** it will trigger when component is render */
    useEffect(() => {
      getUsers();
    }, []);


  return (
    <>
      <h1>Student all data</h1>
      {uData.map((studentData)=>{
        return ( <div key={studentData._id}>
          <h1>Name : {studentData["Full Name"]}</h1>
          <p> college : {studentData.College} </p>
          <p>Enrollment number : {studentData["Enrollment Number"]} </p>
        </div>)
      })}
    </>
  );
}

export default App;
