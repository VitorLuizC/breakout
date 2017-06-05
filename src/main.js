import './style.css'
import animate from './lib/animate'
import { select as selectCanvas } from './lib/canvas'
import { clean } from './lib/draw'
import { collide } from './lib/collision'
import createBall from './lib/ball'

const { context, element: { width, height } } = selectCanvas('#game')
const ball = createBall()

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
  const collideX = ['right', 'left'].some(collision => collisions.includes(collision))
  const collideY = ['top', 'bottom'].some(collision => collisions.includes(collision))

  if (collideX)
    ball.direction.x = -(ball.direction.x)

  if (collideY)
    ball.direction.y = -(ball.direction.y)

  ball.x = ball.x + ball.velocity * ball.direction.x
  ball.y = ball.y + ball.velocity * ball.direction.y

  ball.draw(context)
})

animation.start()
