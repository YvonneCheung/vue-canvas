<template>
  <section>
    <canvas id="clock"
            width="400"
            height="400"></canvas>
  </section>
</template>

<script>

export default {
  name: 'clock',
  props: [''],
  data () {
    return {

    }
  },

  methods: {
    initCanvas () {
      let canvas = document.getElementById('clock')
      let ctx = canvas.getContext('2d')
      let [x, y, r] = [200, 200, 160]
      let date = new Date()
      let hr = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSeconds()
      let hoursValue = (-90 + hr * 30 + min / 2) * Math.PI / 180
      let minValue = (-90 + min * 6) * Math.PI / 180
      let secValue = (-90 + sec * 6) * Math.PI / 180
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.drawDial(ctx, x, y, r, 10) // 绘制表盘
      this.drawScale(ctx, x, y, r, 60, 2, 20, '#5b737f') // 绘制刻度表盘
      this.drawScale(ctx, x, y, r, 12, 3, 30, '#fff')
      this.drawNum(ctx, x, y, r, hoursValue)// 添加小时树
      this.drawLine(ctx, x, y, 9 / 20 * r, 5, hoursValue) // 时针
      this.drawLine(ctx, x, y, 12 / 20 * r, 3, minValue) // 分针
      this.drawLine(ctx, x, y, 15 / 20 * r, 2, secValue) // 秒针
    },
    // 绘制表盘
    drawDial (ctx, x, y, r, lineWidth) {
      var linearGradient1 = ctx.createLinearGradient(0, 200, 300, 200)
      linearGradient1.addColorStop(0, 'rgb(225, 165, 148)')
      linearGradient1.addColorStop(1, 'rgb(235, 235, 235)')
      var linearGradient2 = ctx.createLinearGradient(0, 300, 50, 0)
      linearGradient2.addColorStop(1, 'rgb(225, 165, 148)')
      linearGradient2.addColorStop(0, '#fff')
      ctx.save()
      ctx.lineWidth = lineWidth
      ctx.beginPath()
      ctx.strokeStyle = linearGradient1
      ctx.arc(x, y, r, 0, 2 * Math.PI, false)
      ctx.closePath()
      ctx.fillStyle = linearGradient2
      ctx.fill()
      ctx.stroke()

      // 画圆心
      ctx.fillStyle = '#fff'
      ctx.strokeStyle = '#fff'
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI, false)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    },
    // 画小时数
    drawNum (ctx, x, y, r, hoursValue) {
      if (hoursValue <= 12) {

      }
    },
    // 绘制刻度
    drawScale (ctx, x, y, r, num, lineWidth, lineTo, color) {
      let avgRad = 360 / num
      for (let i = 0; i < num; i++) {
        ctx.save()
        ctx.translate(x, y)// 将起始点定位到圆心
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = color
        // 设置旋转角度
        ctx.rotate(i * avgRad * Math.PI / 180)

        ctx.beginPath()
        ctx.moveTo(0, lineTo - r)
        ctx.lineTo(0, 10 - r)
        // 画刻度线
        ctx.stroke()
        ctx.restore()
      }
    },
    // 画线
    drawLine (ctx, x, y, r, lineW, rad) {
      ctx.save()
      ctx.lineWidth = lineW
      ctx.fillStyle = '#5b737f'
      ctx.strokeStyle = '#5b737f'
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.arc(x, y, r, rad, rad, false)
      ctx.closePath()
      ctx.stroke()
    }
  },
  mounted () {
    this.initCanvas()
    this.timer = setInterval(() => {
      this.initCanvas()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }

}

</script>
<style lang='' scoped>
</style>
