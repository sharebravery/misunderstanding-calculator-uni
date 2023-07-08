/* eslint-disable @typescript-eslint/no-use-before-define */
import type { ObjectDirective } from 'vue'

interface HTMLElementWithDrag extends HTMLElement {
  isDragging: boolean
}

interface Position {
  left: string
  top: string
}

const CLICK_THRESHOLD = 5 // 设置点击阈值（误差）
const EDGE_THRESHOLD = 20 // 设置边缘吸附阈值
const EDGE_DISTANCE = -10 // 设置边缘距离

const dragDirective: ObjectDirective<HTMLElementWithDrag> = {
  mounted(el) {
    el.isDragging = false
    el.style.position = 'fixed'
    el.style.zIndex = '999'
    let initialX = 0
    let initialY = 0
    let offsetX = 0
    let offsetY = 0
    const clickThreshold = CLICK_THRESHOLD
    const edgeThreshold = EDGE_THRESHOLD
    const edgeDistance = EDGE_DISTANCE

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1)
        return
      document.body.style.overflow = 'hidden' // prevent scrolling

      const touch = event.touches[0]
      initialX = touch.clientX
      initialY = touch.clientY
      offsetX = el.offsetLeft
      offsetY = el.offsetTop

      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1)
        return

      const touch = event.touches[0]
      const dx = touch.clientX - initialX
      const dy = touch.clientY - initialY

      if (!el.isDragging && (Math.abs(dx) > clickThreshold || Math.abs(dy) > clickThreshold)) {
        // 超过阈值，触发拖拽
        el.isDragging = true
        el.style.pointerEvents = 'none' // 取消元素的 pointer-events，防止拖拽过程中触发子元素的事件
      }

      if (el.isDragging) {
        const left = offsetX + dx + window.scrollX
        const top = offsetY + dy + window.scrollY

        // 边缘吸附
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        if (left < edgeThreshold)
          el.style.left = `${edgeDistance}px`

        else if (left + el.offsetWidth > windowWidth - edgeThreshold)
          el.style.left = `${windowWidth - el.offsetWidth - edgeDistance}px`

        else
          el.style.left = `${left}px`

        if (top < edgeThreshold)
          el.style.top = `${edgeDistance}px`

        else if (top + el.offsetHeight > windowHeight - edgeThreshold)
          el.style.top = `${windowHeight - el.offsetHeight - edgeDistance}px`

        else
          el.style.top = `${top}px`
      }
    }

    const handleTouchEnd = () => {
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)

      if (el.isDragging) {
        el.isDragging = false
        el.style.pointerEvents = '' // 恢复元素的 pointer-events
      }
      else {
        // 未触发拖拽，执行点击事件
        el.removeEventListener('click', handleClick)
        el.addEventListener('click', handleClick)
      }
      // 保存位置信息到localStorage
      const position: Position = {
        left: el.style.left,
        top: el.style.top,
      }
      localStorage.setItem('draggedElementPosition', JSON.stringify(position))
    }

    const handleClick = () => {
      el.removeEventListener('click', handleClick)
      el.click()
    }

    el.addEventListener('touchstart', handleTouchStart)

    // 恢复之前保存的位置信息
    const savedPosition = localStorage.getItem('draggedElementPosition')
    if (savedPosition) {
      const { left, top } = JSON.parse(savedPosition)
      el.style.left = left
      el.style.top = top
    }
  },
}

export { dragDirective }
