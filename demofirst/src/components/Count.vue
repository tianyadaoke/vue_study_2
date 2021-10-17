<template>
  <div>
      <p>Count组件</p>
      <p>Count的值是{{count}}</p>
      <el-button @click="count++">+1</el-button>
  </div>
</template>

<script>
export default {
    // props:['init'],
    props:{
        init:{
            default:1
        }
    },
    data(){
        return {
            count:this.init
        }
    }
}
</script>

<style>

</style>