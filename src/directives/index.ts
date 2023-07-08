/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-12 09:22:05
 */
import type { App } from 'vue'
import { dragDirective } from './drag.directive'

export async function setupDirective(app: App<Element>) {
  app.directive('drag', dragDirective)
}
