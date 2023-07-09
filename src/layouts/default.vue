<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 11:08:45
-->
<script lang="ts" setup>
// const drawerRef = ref()

// const mode = import.meta.env.MODE
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
      <slot />
      <TheFooter />
    </main>
  </view>
</template>
