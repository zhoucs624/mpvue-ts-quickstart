<template>
  <div class="counter-warp">
    <p>测试继承</p>
    <p >ver: {{ ver }}</p>
    <button @click="testFun">testFun</button>
    <button @click="testFun2">testFun2</button>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./testExtend.ts">
</script>


<style>
</style>
