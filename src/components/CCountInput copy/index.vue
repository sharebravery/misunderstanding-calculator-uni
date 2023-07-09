<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 18:56:48
-->
<script setup lang="ts">
import { ref, watch } from 'vue'

interface IProps {
  modelValue: number | string | undefined | null

  unit: string
}

const props = withDefaults(defineProps<IProps>(), { unit: 'mM' })

const emit = defineEmits(['update:modelValue'])

const value = ref()

watch(() => props.unit, (unit) => {
  console.log('%c [ unit ]-22', 'font-size:13px; background:#cb5541; color:#ff9985;', unit)
  if (value.value === '')
    return value.value = null

  const val = convertVolume(Number(props.modelValue), unit, 'fm')

  // value.value = val

  emit('update:modelValue', val)
})

function onInput(v: string) {
  const val = convertVolume(Number(v), props.unit, 'fm')
  emit('update:modelValue', val)
}
</script>

<template>
  <uni-easyinput v-bind="$attrs" type="number" :value="value" placeholder="请输入数字" @input="onInput" />
</template>
