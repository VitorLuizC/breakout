import { draw } from './draw'

/**
 * @typedef {Object} Bounds
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */

/**
 * @typedef {Object} Axis
 * @property {number} x
 * @property {number} y
 */

/**
 * Representation of ball.
 * @typedef {Object} Ball
 * @property {number} size
 * @property {string} color
 * @property {Axis} direction
 * @property {Axis} position
 * @property {Bounds} bounds
 * @property {function(CanvasRenderingContext2D):void} draw
 */

/**
 * Creates a ball.
 * @returns {Ball}
 */
export default function createBall() {
  return {
    color: 'rgb(155,89,182)',
    size: 50,
    position: {
      x: 50,
      y: 50
    },
    velocity: 4,
    direction: {
      x: -1,
      y: -1
    },
    get bounds() {
      return getBounds(this)
    },
    draw(context) {
      this.position = {
        x: this.position.x + this.velocity * this.direction.x,
        y: this.position.y + this.velocity * this.direction.y
      }
      drawBall(context, this)
    }
  }
}

/**
 * Gets ball's bounds.
 * @param {Ball} ball
 * @returns {Bounds}
 */
function getBounds(ball) {
  return {
    top: ball.position.y - ball.size / 2,
    right: ball.position.x + ball.size / 2,
    bottom: ball.position.y + ball.size / 2,
    left: ball.position.x - ball.size / 2
  }
}

function drawBall(context, ball) {
  draw(context, { shape: 'circle', ...ball })
}
