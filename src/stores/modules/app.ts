/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 10:39:27
 */
import { defineStore } from 'pinia'

interface AppState {
  theme?: string | number
}

export const useAppStore = defineStore('app', {
  unistorage: true,
  state: (): AppState => ({}),
})
