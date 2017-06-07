import './style.css'
import { animate, canvas } from 'quivy'
import { clean } from './lib/draw'
import { collide } from './lib/collision'
import createBall from './lib/ball'
import createPaddle from './lib/paddle'

const { context, element: { width, height } } = canvas.select('#game')
const ball = createBall()
const paddle = createPaddle({ x: width / 2, y: height - 40 })
const container = {
  bounds: {
    top: 0,
    right: width,
    bottom: height,
    left: 0
  }
}

const animation = animate(() => {
  clean(context, { width, height })

  const collisions = collide(ball, container, 'contain')
  const hitX = ['right', 'left'].some(collision => collisions.includes(collision))
  const hitY = ['top', 'bottom'].some(collision => collisions.includes(collision))

  if (hitX)
    ball.direction.x = -(ball.direction.x)

  if (hitY)
    ball.direction.y = -(ball.direction.y)

  ball.x = ball.x + ball.velocity * ball.direction.x
  ball.y = ball.y + ball.velocity * ball.direction.y

  ball.draw(context)
  paddle.draw(context)
})

animation.start()
