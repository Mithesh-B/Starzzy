import React from 'react'
import Card from '../Card/Card'
import "./featuredProducts.scss"
import axios from 'axios'

const FeaturedProducts = ({type}) => {

  

    const[data, setData]= React.useState([])

    React.useEffect(()=>{
      const fetchData= async ()=>{
        try{
          const response = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*",{
            headers: {
              Authorization: "bearer "+ process.env.REACT_APP_API_TOKEN,
            }
          })
          setData(response.data.data)
        }catch(err){
          console.log(err)
        }
      }
      fetchData()
    }, []);

    console.log(data)
    
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quasi, dolorem iure? Necessitatibus in sunt nisi sit minima, 
           nihil velit debitis excepturi numquam. Fugit illo tenetur non est? Temporibus,
            sed doloribus!</p>
      </div>
      <div className="bottom">
      {data.map(item =>(<Card item={item} key={item.id}/>))}
      </div>
      
    </div>
  )
}

export default FeaturedProducts
