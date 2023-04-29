export const rafThrottle = (func: Function) => {
  let ticking = false
  return (...args: any[]) => {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(function () {
      func(...args)
      ticking = false
    })
  }
}
