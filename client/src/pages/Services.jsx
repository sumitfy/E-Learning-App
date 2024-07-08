import React, { useState , useEffect } from 'react'

const Services = () => {
    const [service , setService] = useState([]);
    const containerstyle = {
        display:'flex',
        margin:'0 0 0 30%',
    }
    const cardStyle = {
        border: '1px solid #ccc',
        width:'50%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        padding: '16px',
        margin: '16px',
        backgroundColor: '#fff',
        textAlign: 'center'
      };
      
      const titleStyle = {
        fontSize: '24px',
        margin: '0',
        padding: '0',
        color: '#333'
      };
      const stepStyle = {
        fontSize: '17px',
        margin: '0',
        padding: '0',
        color: '#333'
      };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/data/service');
            const data = await response.json();
            setService(data); // Store the resolved data in state
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    },[])
    if (!service) {
        return <div>Loading...</div>; // Render loading state while data is being fetched
    }
  return (
    <div>
      {service.map((item, index) => (
        <div style={containerstyle}>
            <div key={index} style={cardStyle}>
                <h1 style={titleStyle}>{item.title}</h1>
                <img src={item.imageUrl} alt="image" height={300} width={300} />
                <li style={stepStyle}>{item.instructor}</li>
                <li  style={stepStyle}>{item.duration}</li >
                <li  style={stepStyle}>{item.price}</li >
                <li  style={stepStyle}>{item.category}</li >
                {/* <li  style={stepStyle}>{item.step5}</li > */}
            </div>
        </div>
          
      ))}
    </div>

  )
}

export default Services