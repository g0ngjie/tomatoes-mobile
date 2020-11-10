/**
 * isIos
 *
 * @export
 * @returns {boolean}
 */
export function isIos(): boolean {
  const isAndroid = /(Android)/i.test(navigator.userAgent)                         // android终端
  const isiOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)                // ios终端
  if (isAndroid) return false
  if (isiOS) return true
  return false
}