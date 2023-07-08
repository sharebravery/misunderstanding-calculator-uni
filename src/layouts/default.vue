<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 11:08:45
-->
<script lang="ts" setup>
import Drawer from './components/Drawer.vue'

const drawerRef = ref()

const mode = import.meta.env.MODE
</script>

<template>
  <view
    class="app" :class="{
      dark: isDark,
    }"
  >
    <main
      px-4 py-6
      font-sans text="center"
      color-gray-700 dark:color-gray-200
    >
      <view v-if="mode === 'development'">
        <view v-drag class="bg-emerald rounded-half lh-10 h100 w100" @click="($refs.drawerRef as any).drawerRef.open()">
          show
        </view>
        <Drawer ref="drawerRef" />
      </view>
      <slot />
    </main>
  </view>
</template>
