import React, {useState, useEffect} from "react"
import axios from "axios"
import "./style.css"
const Data = () => {
    const [data, setData] = useState([]);
    const URL ="http://localhost:5000"
    useEffect(()=>{
        axios.get("http://localhost:5000/menu/show")
    .then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
    },[])

    const showData = data.map((data,id)=>{
        return(
            <tr key={id}>
                <td className="m-0 p-0"><img className="img" src={`${URL}/${data.image}`} alt="..." /></td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
            </tr>
        )
    })
    return (
        <div className="justify-content-center">
        <table
          className="table table-dark table-striped table-hover"
          style={{ width: "75%" }}
        >
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>{showData}</tbody>
        </table>
      </div>
    );
  };

  export default Data;