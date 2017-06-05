import './style.css'
import animate from './lib/animate'
import { select as selectCanvas } from './lib/canvas'
import { clean } from './lib/draw'
import createBall from './lib/ball'

const { context, element, element: { width, height } } = selectCanvas('#game')
const ball = createBall()
const animation = animate(() => {
  clean(context, { width, height })

  if (ball.x >= width || ball.x <= 0)
    ball.direction.x = -(ball.direction.x)

  if (ball.y >= height || ball.y <= 0)
    ball.direction.y = -(ball.direction.y)

  ball.x = ball.x + ball.velocity * ball.direction.x
  ball.y = ball.y + ball.velocity * ball.direction.y
  ball.draw(context)
})

animation.start()
