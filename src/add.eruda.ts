function init() {
  const script: any = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/eruda'
  script.onload = function () {
    const script_2: any = document.createElement('script')
    script_2.innerHTML = 'eruda.init()'
    document.body.appendChild(script_2)
  }
  document.body.appendChild(script)
}

/**
 * add eruda
 *
 * @export
 * @param {(boolean | undefined)} alwaysShow
 */
export function addEruda(alwaysShow: boolean | undefined): void {
  if (alwaysShow) {
    init()
    return
  }
  const win: Window = window
  if (!/eruda=true/.test(win.location.toString()) && localStorage.getItem('active-eruda') != 'true') return
  else init()
}

