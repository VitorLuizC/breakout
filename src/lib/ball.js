import { draw } from './draw'

/**
 * @typedef {Object} Bounds
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */

/**
 * @typedef {Object} Direction
 * @property {number} x
 * @property {number} y
 */

/**
 * Representation of ball.
 * @typedef {Object} Ball
 * @property {number} x
 * @property {number} y
 * @property {number} size
 * @property {string} color
 * @property {Direction} direction
 * @property {Bounds} bounds
 * @property {function(CanvasRenderingContext2D):void} draw
 */

/**
 * Creates a ball.
 * @returns {Ball}
 */
function createBall() {
  const ball = {
    x: 50,
    y: 50,
    size: 50,
    opacity: 1,
    velocity: 10,
    direction: {
      x: -1,
      y: -1
    },
    get color() {
      return `rgba(155, 89, 182, ${this.opacity})`
    },
    get bounds() {
      return {
        top: this.y - this.size / 2,
        right: this.x + this.size / 2,
        bottom: this.y + this.size / 2,
        left: this.x - this.size / 2
      }
    },
    draw(context) {
      // TODO: Use pick helper.
      draw(context, {
        size: this.size,
        shape: 'circle',
        color: this.color,
        position: {
          x: this.x,
          y: this.y
        }
      })
    }
  }

  return ball
}

export default createBall
