<route lang="yaml">
name: Dilute
style:
  navigationBarTitleText: 溶液稀释计算器
tabBar:
  iconPath: static/images/tabBar/home.png
  selectedIconPath: static/images/tabBar/selectedHome.png
</route>

<script setup lang="ts">
import { reactive } from 'vue'
import { Toast } from '../../../utils/uniapi/prompt'

interface DiluteValue { value: number; unit: string }

class Dilute {
  c1: DiluteValue = { value: 0, unit: 'mM' }
  v1: DiluteValue = { value: 0, unit: 'mL' }
  c2: DiluteValue = { value: 0, unit: 'mM' }
  v2: DiluteValue = { value: 0, unit: 'mL' }
}

const info = reactive(new Dilute())

function calculateDilution() {
  // 检查输入是否为空
  console.log('%c [ info ]-28', 'font-size:13px; background:#d41854; color:#ff5c98;', info)
  if (Object.values(info).filter(e => !e.value).length > 1)
    return Toast('缺少输入')

  console.log('%c [ Object.values(info).filter(e => e.value === null) ]-32', 'font-size:13px; background:#9ff50d; color:#e3ff51;', Object.values(info).filter(e => e.value === null))
  if (Object.values(info).filter(e => !e.value).length !== 1)
    return Toast('需要保留一个空的数')

  // 根据稀释公式计算缺失的属性
  if (!info.v2.value)
    info.v2.value = (info.c1.value * info.v1.value) / info.c2.value

  else if (!info.c2.value)
    info.c2.value = (info.c1.value * info.v1.value) / info.v2.value

  else if (!info.v1.value)
    info.v1.value = (info.c2.value * info.v2.value) / info.c1.value

  else if (!info.c1.value)
    info.c1.value = (info.c2.value * info.v2.value) / info.v1.value

  return info
}
</script>

<template>
  <view class="container">
    {{ info.v2 }}
    <view>
      <view class="flex items-center">
        <text>
          初始浓度：
        </text>
        <c-count-input v-model="info.c1.value" type="number" :unit="info.c1.unit" placeholder="请输入开始浓度" />
      </view>
      <uni-data-checkbox v-model="info.c1.unit" mode="button" :localdata="cUnits" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          初始体积：
        </text>
        <v-count-input v-model="info.v1.value" :unit="info.v1.unit" type="number" placeholder="请输入开始体积" />
      </view>
      <uni-data-checkbox v-model="info.v1.unit" mode="button" :localdata="vUnits" value="mL" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          最终浓度：
        </text>
        <c-count-input v-model="info.c2.value" :unit="info.c2.unit" type="number" placeholder="请输入最终浓度" />
      </view>
      <uni-data-checkbox v-model="info.c2.unit" mode="button" :localdata="cUnits" value="mM" />
    </view>

    <view>
      <view class="flex items-center">
        <text>
          最终体积：{{ info.v2.value }}
        </text>
        <v-count-input v-model="info.v2.value" :unit="info.v2.unit" type="number" placeholder="请输入最终体积" />
      </view>
      <uni-data-checkbox v-model="info.v2.unit" mode="button" :localdata="vUnits" value="mL" />
    </view>

    <button class="mt10 bg-blue" @click="calculateDilution">
      计算
    </button>
  </view>
</template>
