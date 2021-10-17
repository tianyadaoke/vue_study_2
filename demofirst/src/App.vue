<template>
  <div>
    <h1>{{ username }}</h1>
    <el-button @click="changeName">修改用户名</el-button>
    <div class="box">
      <left></left>
      <right></right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';

export default {
  components: { Left,Right},
  data() {
    return {
      username: "zhanglaosan",
    };
  },
  methods:{
    changeName(){
      this.username="lisi"
      console.log(this)
    }
  },
  watch:{

  },
  computed:{

  },
  filters:{

  }
};
</script>

<style lang="less" scoped>
.box{
  background-color: orange;
}
</style>>

