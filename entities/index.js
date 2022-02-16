import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from "react-native";

const windowHeights = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false })

  let world = engine.world

  engine.gravity.y = 0.4;

  return {
    physics: {engine, world},
    Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),
    Floor: Floor(world, 'blue', { x: windowWidth / 2, y: windowHeights }, { height: 50, width: windowWidth }),
  }
}