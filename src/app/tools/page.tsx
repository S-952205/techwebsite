import React from 'react'

const Tools = () => {

  const tooldata = [
    {id: 1, name: "Vivo X200 Smart Phone", price: 1050, image:"/vivox200.jpg"},
    {id: 2, name: "Reolink Pro Security Camera", price: 219.99, image:"/reolink.jpg"},
    {id: 3, name: "Narwal Robot Vaccum", price: 1399.99, image:"/narwalrobotvaccum.jpeg"},
    {id: 4, name: "Oclean-X-Ultra", price: 103.50, image:"/Oclean-X-Ultra.jpg"},
    {id: 5, name: "Infused Water Bottle", price: 1150, image:"/infused-Water-Bottle.jpeg"},
    {id: 6, name: "Echo Glow Lamp", price: 55.50, image:"/echoglowlamp.jpg"},

  ]
  return (
     <div className='tools-contain'>
       {        
        tooldata.map((tool) => (
        <div key={tool.id} className='tool-box'>
         <img src={tool.image} alt={tool.name}/>
         <h3>{tool.name}</h3>
         <p>${tool.price}</p>
         <button>Add to Cart</button>
        </div>
        ))
        
       }
     </div>
  )
}

export default Tools