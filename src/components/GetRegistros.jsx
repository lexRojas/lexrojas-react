import React, { useEffect, useState } from 'react';


const GetRegistros = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/registros');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  if (data) { return (
      (data.map((o) => (
          <option key={o.id_registro} value={o.id_registro}> {o.registro_descripcion} </option>
        ))
      )
  )};
};

export default GetRegistros;
