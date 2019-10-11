<template>
  <div class="home">
      <main>
        <router-view></router-view>
      </main>
      <footer>
            <router-link tag="span" to="/home/shouye">首页</router-link>
            <router-link tag="span" to="/home/my">我的</router-link>
      </footer>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>
<style lang="scss" scoped>
    .home{
      width:100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      main{
        flex:1;
      }
      footer{
        width:100%;
        height: 60px;
        display: flex;
        span{
          flex:1;
          text-align: center;
          line-height: 60px;
          &.router-link-active{
            color:#f00;
          }
        }
      }
    }
</style>