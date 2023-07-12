<route lang="yaml">
name: UnitConvert
style:
  navigationBarTitleText: 单位转换
tabBar:
  iconPath: static/images/tabBar/home.png
  selectedIconPath: static/images/tabBar/selectedHome.png
</route>

<script setup lang="ts">
import { reactive } from 'vue'

const info = reactive({
  formValue: undefined,
  formUnit: 'mL',
  toValue: 0,
  toUnit: 'mL',
})

watchEffect(() => {
  (info.toValue as unknown as number) = convertVolume(Number(info.formValue ?? 0), info.formUnit, info.toUnit)
})
</script>

<template>
  <view class="container">
    <h1>液体体积单位换算</h1>
    <view>
      <text>源数据</text>
      <view>
        <uni-easyinput v-bind="$attrs" v-model="info.formValue" type="number" placeholder="请输入数字" />
        <uni-data-checkbox v-model="info.formUnit" mode="button" :localdata="vUnits" />
      </view>
    </view>
    <view>
      <text>结果</text>
      <view>
        {{ convertToScientificNotation(info.toValue) }}
      </view>
      <uni-data-checkbox v-model="info.toUnit" mode="button" :localdata="vUnits" />
    </view>
  </view>
</template>
