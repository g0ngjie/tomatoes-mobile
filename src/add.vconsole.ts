
/**
 * add vconsole
 * @param {boolean} alwaysShow 展示条件
 * @param {number} touchCount 条件触发数量
 * @example
 * ```
 * // 需要五指同时点击屏幕，展示/隐藏vconsole
 * addVconsole(false, 5);
 * // OR
 * addVconsole();
 *
 * // 直接展示
 * addVconsole(true);
 *
 * // 或者通过环境变量判断
 * if (isProduction) addVconsole()
 *
 *
 * ```
 */
export function addVconsole(alwaysShow?: boolean, touchCount: number = 5): void {
  const _window: any = window
  if (alwaysShow) {
    const V: any = require('vconsole')
    _window.__TOMATOES_CONSOLE__ = new V()
    return
  }
  // 添加vonsole的埋点， 5指点击可唤出
  let i = 0
  let vTimer: any
  document?.addEventListener('touchstart', e => {
    i++
    if (e.touches.length === touchCount && i >= touchCount) {
      i = 0
      clearTimeout(vTimer)
      vTimer = ''
      if (document.querySelector('#__vconsole')) {
        _window.__TOMATOES_CONSOLE__?.destroy()
      } else {
        const V: any = require('vconsole')
        _window.__TOMATOES_CONSOLE__ = new V()
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