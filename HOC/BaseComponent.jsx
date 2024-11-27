import React from 'react'

const BaseComponent = ({data}) => {
  return (
    <div>
      <h1>Data</h1>
      <ul>
        {
            data.map((item,index)=>
                <li key={index}>{item}</li>
            )
        }
      </ul>
    </div>
  )
}

export default BaseComponent
