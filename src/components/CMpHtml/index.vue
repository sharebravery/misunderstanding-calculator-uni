<script setup lang="ts">
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
</script>

<template>
  <mp-html v-bind="$attrs">
    <template v-for="k in Object.keys($slots)" #[k] :key="k">
      <slot :name="k" />
    </template>
  </mp-html>
</template>
