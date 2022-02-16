import Matter from 'matter-js'
import React from 'react'
import { View } from 'react-native'

const Bird = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

  // center of the body
  const xBody = props.body.position.x - widthBody / 2
  const yBody = props.body.position.y - heightBody / 2

  const color = props.color;

  return (
    <View style={{
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid',
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
      // backgroundColor: 'black',
    }}/>
  )
}

export default ( world, color, pos, size ) => {
  // define collision shape for the initialBird (rigid body)
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'Bird'}
  )
  Matter.World.add(world, initialBird)

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird/>
  }
}
