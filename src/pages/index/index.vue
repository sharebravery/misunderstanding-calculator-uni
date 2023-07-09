<route lang="yaml">
name: Home
style:
  navigationBarTitleText: 主页
tabBar:
  iconPath: static/images/tabBar/home.png
  selectedIconPath: static/images/tabBar/selectedHome.png
</route>

<script setup lang="ts">
const showNewPage = ref(false) // 控制新页面的显示与隐藏

let startY = 0 // 触摸开始时的 Y 坐标

// 触摸开始事件处理函数
function handleTouchStart(event: TouchEvent) {
  startY = event.touches[0].clientY
}

// 触摸移动事件处理函数
function handleTouchMove(event: TouchEvent) {
  const distance = event.touches[0].clientY - startY
  if (distance > 50) {
    // 当向下滑动距离超过 100px 时，显示新页面
    showNewPage.value = true

    router.push({ name: 'UnitConvert' })
  }
}

// 触摸结束事件处理函数
function handleTouchEnd() {
  if (!showNewPage.value) {
    // 当没有显示新页面时，重置触摸开始的 Y 坐标
    startY = 0
  }
}
</script>

<template>
  <view class="container h-full">
    <view
      class="original-page"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <uni-icons type="color" size="60" color="#2f90b9" @click="router.push({ name: 'Me' })" />
      <uni-card title="溶液稀释计算器" @click="router.push({ name: 'Dilute' })">
        开始浓度 × 开始体积 = 最终浓度 × 最终体积 | C1V1 = C2V2
      </uni-card>

      <uni-card title="摩尔浓度计算器">
        根据后续反馈再决定要不要开发
      </uni-card>

      <button class="bg-amber" @click="router.push({ name: 'UnitConvert' })">
        单位换算(现在只有这个能用)
      </button>

      <text class="c-blue">
        下滑常用公式查询以及单位换算
      </text>
      <view>
        由于本人没有做过科研工作，所做出来的东西可能不合使用，比如实验室所需要的数据，计算方式，相关单位，名称等，请进行反馈
      </view>
    </view>
  </view>
</template>
