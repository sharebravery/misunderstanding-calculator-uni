<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 18:56:48
-->
<script setup lang="ts">
import { ref, watch } from 'vue'

interface IProps {
  modelValue: number | string | undefined

  unit: string
}

const props = withDefaults(defineProps<IProps>(), { unit: 'mM' })

const emit = defineEmits(['update'])

const value = ref()

watch(() => props.unit, (unit) => {
  console.log('%c [ unit ]-22', 'font-size:13px; background:#06cdec; color:#4affff;', unit)
  if (value.value === '')
    return value.value = undefined

  value.value = convertConcentration(Number(props.modelValue), unit)

  emit('update', value.value)
})

// function onInput(v: string) {
//   value.value = convertConcentration(Number(v), props.unit)
// }
</script>

<template>
  <uni-easyinput v-bind="$attrs" type="number" :value="value" placeholder="请输入数字" />
</template>
