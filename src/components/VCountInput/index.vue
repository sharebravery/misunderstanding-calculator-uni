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

/**
 * 显示值转换(非实际值，仅做显示)
 */
watch(() => props.unit, (newUnit, oldUnit) => {
  if (value.value === '')
    return value.value = null

  const val = convertVolume(Number(props.modelValue), oldUnit, newUnit)

  emit('update:modelValue', val)
})

/**
 *
 * @param v 实际值转换（全部转换为fL）
 */
function onInput(v: string) {
  const val = convertVolume(Number(v), props.unit, 'fL')

  emit('update:modelValue', val)
}
</script>

<template>
  <uni-easyinput v-bind="$attrs" type="number" :value="value" placeholder="请输入数字" @input="onInput" />
</template>
