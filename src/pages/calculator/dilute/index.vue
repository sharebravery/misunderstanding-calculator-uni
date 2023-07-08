<route lang="yaml">
name: Dilute
style:
  navigationBarTitleText: 溶液稀释计算器
</route>

<script setup lang="ts">
import { reactive } from 'vue'
import { Toast } from '../../../utils/uniapi/prompt'

interface DiluteValue { value: undefined | number; unit: string }

class Dilute {
  c1: DiluteValue = { value: undefined, unit: 'mM' }
  v1: DiluteValue = { value: undefined, unit: 'mL' }
  c2: DiluteValue = { value: undefined, unit: 'mM' }
  v2: DiluteValue = { value: undefined, unit: 'mL' }
}

const info = reactive(new Dilute())

function calculateDilution() {
  // 检查输入是否为空
  if (Object.values(info).filter(e => e === undefined || e).length > 1)
    return Toast('缺少输入')

  if (Object.values(info).filter(e => e === undefined).length !== 1)
    return Toast('需要保留一个空的数')

  // 如果任何一个属性值为零，则无法进行计算
  if (info.c1.value! < 0 || info.v1.value! < 0 || info.c2.value! < 0 || info.v2.value! < 0)
    return Toast('不能有小于0的数字')

  // 根据稀释公式计算缺失的属性
  if (info.c1.value && info.v1.value && info.c2.value && !info.v2.value)
    info.v2.value = (info.c1.value * info.v1.value) / info.c2.value

  else if (info.c1.value && info.v1.value && !info.c2.value && info.v2.value)
    info.c2.value = (info.c1.value * info.v1.value) / info.v2.value

  else if (info.c1.value && !info.v1.value && info.c2.value && info.v2.value)
    info.v1.value = (info.c2.value * info.v2.value) / info.c1.value

  else if (!info.c1.value && info.v1.value && info.c2.value && info.v2.value)
    info.c1.value = (info.c2.value * info.v2.value) / info.v1.value

  return info
}
</script>

<template>
  <view class="container">
    <!-- <c-count-input v-model="info.c1.value" :unit="info.c1.unit" /> -->
    <view>
      <view class="flex items-center">
        <text>
          开始浓度：
        </text>
        <uni-easyinput v-model="info.c1.value" type="number" placeholder="请输入开始浓度" />
      </view>
      <uni-data-checkbox v-model="info.c1.unit" mode="button" :localdata="cUnits" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          开始体积：
        </text>
        <uni-easyinput v-model="info.v1.value" type="number" placeholder="请输入开始体积" />
      </view>
      <uni-data-checkbox mode="button" :localdata="vUnits" value="mL" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          最终浓度：
        </text>
        <uni-easyinput v-model="info.c2.value" type="number" placeholder="请输入最终浓度" />
      </view>
      <uni-data-checkbox mode="button" :localdata="cUnits" value="mM" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          最终体积：
        </text>
        <uni-easyinput v-model="info.v2.value" type="number" placeholder="请输入最终体积" />
      </view>
      <uni-data-checkbox mode="button" :localdata="vUnits" value="mL" />
    </view>

    <button class="mt10 bg-blue" @click="calculateDilution">
      计算
    </button>
  </view>
</template>
