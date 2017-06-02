import './style.css'
import animate from './lib/animate'
import { select as selectCanvas } from './lib/canvas'
import draw from './lib/draw'

const { context, element, element: { width, height } } = selectCanvas('#game')

draw(context, {
  shape: 'rect',
  size: [100, 20],
  position: { x: 50, y: 50 }
})

draw(context, {
  shape: 'circle',
  size: 50,
  position: { x: 150, y: 50 }
})

draw(context, {
  shape: 'rect'
})
