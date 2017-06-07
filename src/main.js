import './style.css'
import { animate, canvas } from 'quivy'
import { clean } from './lib/draw'
import { collide } from './lib/collision'
import createBall from './lib/ball'
import createPaddle from './lib/paddle'
import * as key from './lib/key'

const { context, element } = canvas.select('#game')
const { width, height } = element
const container = {
  bounds: {
    top: 0,
    right: width,
    bottom: height,
    left: 0
  }
}
const ball = createBall()
const paddle = createPaddle({ x: width / 2, y: height - 40 })
const animation = animate(play)

animation.start()

function play() {
  clean(context, { width, height })

  const ballContainerHits = collide(ball.bounds, container.bounds)
  const ballPaddleHits = collide(ball.bounds, paddle.bounds, 'hit')

  if (includesSome(ballContainerHits, 'right', 'left'))
    ball.direction.x = -(ball.direction.x)

  if (includesSome(ballPaddleHits, 'top') ||
      includesSome(ballContainerHits, 'top'))
    ball.direction.y = -(ball.direction.y)

  if (key.isPress('ArrowRight'))
    paddle.position.x += 4

  if (key.isPress('ArrowLeft'))
    paddle.position.x -= 4

  ball.draw(context)
  paddle.draw(context)
}

/**
 * Checks if one of targets is present on array.
 * @param {Array.<*>} array
 * @param {(...*)} targets
 * @returns {boolean}
 */
function includesSome(array, ...targets) {
  return targets.some(target => array.includes(target))
}
