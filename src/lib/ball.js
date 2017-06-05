import { draw } from './draw'

/**
 * Representation of ball.
 * @typedef {Object} Ball
 * @property {number} x
 * @property {number} y
 * @property {number} size
 * @property {string} color
 * @property {function(CanvasRenderingContext2D):void} draw
 */

/**
 * @typedef {{width:number, height:number}} Bounds
 */

/**
 * @param {Bounds} bounds
 * @returns {Ball}
 */
function createBall() {
  return {
    x: 0,
    y: 0,
    size: 50,
    opacity: 1,
    velocity: 5,
    direction: {
      x: -1,
      y: -1
    },
    get color() {
      return `rgba(155, 89, 182, ${this.opacity})`
    },

    /**
     * Draws ball using context.
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
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
}

export default createBall
