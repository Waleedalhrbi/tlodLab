import React from 'react'

function Card(props) {
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-none">
      <figure>
        <img
          src={props.imageUrl}
          alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>
            <ul>
            {props.description}
            </ul>
            </p>
      </div>
    </div>
  )
}

export default Card
