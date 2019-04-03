<template>
  <div id="App"
       class="main">
    <at-menu mode="horizontal"
             active-name="clock"
             @on-select="switchMenu"
             router>
      <at-menu-item name="clock">普通时钟</at-menu-item>
      <at-menu-item name="coolClock">炫酷时钟</at-menu-item>
    </at-menu>
    <router-view class="container flex-row center middle"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/footer'
export default {
  name: 'App',
  components: { vFooter },
  props: [''],
  data () {
    return {

    }
  },

  created () {
  },

  methods: {
    switchMenu (val) {
      this.$router.push('/' + val)
    }

  }

}

</script>
<style lang='less' scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .at-menu {
    background-color: #ffffcc;
    color: #999;
  }
  .at-menu--horizontal {
    height: 58px;
    line-height: 58px;
  }
  .container {
    width: 100%;
    flex-grow: 1;
    background-color: #ccccff;
  }
}
</style>
