import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Episode = () => {
    const [id,setID] = useState (1)
    const [info, setInfo] = useState([])
    let {air_date,name} = info

    useEffect(() => {
        const endPoint = `https://rickandmortyapi.com/api/episode/${id}`;
        axios
          .get(endPoint)
          .then((res) => {
            const apiData = res.data;
            setInfo(apiData);
          })
          .catch((err) => {
            Swal.fire("no se pudo conectar con la api");
          });
      }, []);
  return (
    <div>
        <h1>{air_date}</h1>
        <h1>{name}</h1>
    </div>
  )
}

export default Episode