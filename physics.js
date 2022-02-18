import Matter from "matter-js"

const Physics = ( entities , { touches, time, dispatch }) => {
  let engine = entities.physics.engine

  touches.filter( t => t.type === 'press' )
  .forEach( t => {
    Matter.Body.setVelocity(entities.Bird.body, {
      x: 0,
      y: -8,
    })
  })

  Matter.Engine.update( engine, time.delta )
  for (let index = 1; index <= 2; index++) {
    Matter.Body.translate( entities['ObstacleTop1${index}'].body, {x: -2, y: 0})
    Matter.Body.translate( entities['ObstacleBottom1'].body, {x: -2, y: 0})
    // Matter.Body.rotate( entities['ObstacleTop1'].body, 1)
  }

  return entities;
}

export default Physics