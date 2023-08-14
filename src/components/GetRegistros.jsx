import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetRegistros = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const baseURL = "https://lexrojas-backend-c21ed8c2c96d.herokuapp.com/registros";

  const fetchData = async () => {
    await axios.get(baseURL)
    .then(function (response) {
      setData(response.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })  
  };

  
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://lexrojas-backend-c21ed8c2c96d.herokuapp.com/registros');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };



  if (data) { return (
      (data.map((o) => (
          <option key={o.id_registro} value={o.id_registro}> {o.registro_descripcion} </option>
        ))
      )
  )};
};

export default GetRegistros;
