/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-04 23:48:30
 */
import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

const pinia = createPinia()

pinia.use(
  createUnistorage(),
)

export default pinia
