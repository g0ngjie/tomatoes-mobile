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
export declare function addVconsole(alwaysShow?: boolean, touchCount?: number): void;
