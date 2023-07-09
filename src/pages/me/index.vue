<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 13:21:34
-->
[<route lang="yaml">
name: Me
style:
  navigationBarTitleText: 个人中心
</route>

<script setup lang="ts">

</script>

<template>
  <view class="container">
    <uni-title
      class="mx-a my0"
      type="h1" title="意见反馈/功能反馈"
    />

    <view class="c-blue">
      example:
      <uni-tag text="功能建议" type="primary" class="mx1" />
      <uni-tag text="UI设计" type="royal" class="mx1" />
      <uni-tag text="动物体内配方计算" type="warning" class="mx1" />
      <uni-tag text="细胞" type="success" />

      <ul>
        <li>提供设计稿或者相关元素</li>
        <li>摩尔浓度计算器</li>
        <li>分子量计算器</li>
        <li>溶剂为固体</li>
        <li>溶质为固体</li>
        <li>固体粉末</li>
      </ul>
    </view>

    <text>
      求知问路，与诸君共勉。
    </text>

    <uni-card> 📪邮箱(推荐)：sharebravery@gmail.com</uni-card>
    <uni-card> QQ： 3114289849</uni-card>
  </view>
</template>

<style lang="scss" scoped>
ul {
    margin-top: 1rem;
    li {
        // background-color: #add5a2;
        margin: 0.25rem auto;
    }
}
</style>
