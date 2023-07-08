<route lang="yaml">
name: Mol
style:
  navigationBarTitleText: 摩尔浓度计算器
</route>

<script setup lang="ts">
import { ref } from 'vue'

// 单位换算常数
const molToGram = 18.01528 // 摩尔到克的换算常数

// 组件逻辑
const substance = ref(0)
const volume = ref(0)
const unit = ref('mol')
const result = ref('')

function calculate() {
  if (substance.value <= 0 || volume.value <= 0) {
    result.value = ''
    return
  }

  let concentration = 0
  if (unit.value === 'mol')
    concentration = substance.value / volume.value
  else if (unit.value === 'g')
    concentration = (substance.value * molToGram) / volume.value

  result.value = concentration.toFixed(2)
}
</script>

<template>
  <div class="calculator">
    <h1>摩尔浓度计算器</h1>

    <label for="substance">物质量：</label>
    <input id="substance" v-model="substance" type="number" min="0" step="0.01">

    <label for="volume">溶液体积：</label>
    <input id="volume" v-model="volume" type="number" min="0" step="0.01">

    <label for="unit">单位：</label>
    <select id="unit" v-model="unit">
      <option value="mol">
        mol
      </option>
      <option value="g">
        g
      </option>
    </select>

    <button @click="calculate">
      计算
    </button>

    <div v-if="result" class="result">
      <p>摩尔浓度: {{ result }} {{ unit }}/L</p>
    </div>
  </div>
</template>

  <style scoped>
  .calculator {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }

  input, select, button {
    margin-bottom: 10px;
  }

  .result {
    margin-top: 20px;
  }
  </style>
