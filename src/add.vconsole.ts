/**
 * add vconsole
 *
 * @export
 * @param {boolean} alwaysShow
 */
export function addVconsole(alwaysShow?: boolean): void {
  if (alwaysShow) {
    const V: any = require('vconsole')
    const v = new V()
    console.log(v.test)
    return
  }
  // 添加vonsole的埋点， 5指点击可唤出
  let i = 0
  let vTimer: any
  document?.addEventListener('touchstart', e => {
    console.log(e.touches.length)
    i++
    if (e.touches.length === 5 && i >= 5) {
      i = 0
      clearTimeout(vTimer)
      vTimer = ''
      if (document.querySelector('#__vconsole')) {
        document.querySelector('#__vconsole')?.remove()
      } else {
        const V: any = require('vconsole')
        const v = new V()
        console.log(v.test)
      }
    }
    if (vTimer) {
      setTimeout(() => {
        i = 0
        clearTimeout(vTimer)
        vTimer = ''
      }, 1000)
    }
  })
}
