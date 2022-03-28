import React from 'react'

function Welcome(props) {
    return <h1>Hello, { props.name }</h1>
}

export default function Composition() {
  return (
    <div>Composition
          <Welcome name="Jimmy" />
          <Welcome name="Jimmy" />
          <Welcome name="Jimmy" />
          <Welcome name="Santa" />
          <Welcome name="Pierre"/>
    </div>
  )
}
