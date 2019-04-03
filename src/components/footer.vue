<template>
  <footer class="flex-col center middle">
    <div class="foot flex-row center middle">
      <a href="https://github.com/YvonneCheung"
         target="blank">
        <i class="icon-github f20"></i>
      </a>
      <a href="https://weibo.com/yugohouse"
         target="blank">
        <i class="icon-sina-weibo f20"></i>
      </a>
      <a href="mailto:xixixixiao@hotmail.com">
        <i class="icon-email f20"></i>
      </a>
      <a href="mailto:bigxxxiao@gmail.com">
        <i class="icon-google-plus f20"></i>
      </a>
    </div>
    <div class="c-theme">website by
      <a href="https://github.com/YvonneCheung"
         target="blank">
        zhangxiao
      </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'footer',
  props: [''],
  data () {
    return {

    }
  },

  created () {
  },

  methods: {

  }

}

</script>
<style lang='less' scoped>
footer {
  background-color: #ffffcc;
  // border-top: 1px solid #e2ecf4;
  padding: 10px 0;
  .foot {
    margin: 5px 0;
    a {
      margin: 0 5px;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
