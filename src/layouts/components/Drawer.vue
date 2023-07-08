<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-29 16:56:31
-->
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pagesJson from '/src/pages.json'
import { ref } from 'vue'

const { pages } = pagesJson as UniAppPagesConfig

const drawerRef = ref()

defineExpose({
  drawerRef,
})
</script>

<template>
  <view class="container">
    <uni-drawer ref="drawerRef" mode="right">
      <view class="scroll-view">
        <scroll-view class="scroll-view-box" scroll-y="true">
          <view v-for="item in pages" :key="item.path" class="info-content mb ml-a mr-a mt bg-blue w-lg">
            <a @click="router.push(item.path)"> {{ item.style?.navigationBarTitleText }}</a>
          </view>
        </scroll-view>
      </view>
    </uni-drawer>
  </view>
</template>
