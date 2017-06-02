/**
 * @typedef Animation
 * @property {function} animation
 */

/**
 * Create a new animation object.
 * @param {function} animation
 * @returns {Animation}
 */
export default function animate(animation) {
  const instance = {
    animation,
    id: null
  }

  return {
    get animation() {
      return instance.animation
    },
    set animation(animation) {
      instance.animation = animation
    },
    stop: stop.bind(instance),
    start: start.bind(instance)
  }
}

/**
 * Stop animation. Returns false if animation is not running.
 * @memberof Animation
 * @returns {boolean}
 */
function stop() {
  if (this.id === null) // Stopped animation
    return false

  cancelAnimationFrame(this.id)
  this.id = null
  return true
}

/**
 * Start animation. Returns false if animation is already running.
 * @memberof Animation
 * @returns {boolean}
 */
function start() {
  if (this.id !== null) // Already running animation
    return false

  this.id = requestAnimationFrame(this.animation)
  run.call(this)
  return true
}

/**
 * Run animation using browser's AnimationFrame API.
 * @private
 */
function run() {
  this.animation()
  this.id = requestAnimationFrame(run.bind(this))
}