<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { rafThrottle } from "~/utils/debounce";
import { hexaToRgba, extractRGBValues } from "~/utils/colors"

const canvas = ref<HTMLCanvasElement>()

const DotSize = 4
const DotSpacing = 2

const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
  if (width < 2 * radius) radius = width / 2
  if (height < 2 * radius) radius = height / 2
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + width, y, x + width, y + height, radius)
  ctx.arcTo(x + width, y + height, x, y + height, radius)
  ctx.arcTo(x, y + height, x, y, radius)
  ctx.arcTo(x, y, x + width, y, radius)
  ctx.closePath()
  ctx.fill()
}

const repaintCanvas = async () => {
  const el = canvas.value
  if (!el) {
    return
  }
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) {
    throw new Error('Canvas initialize failed.')
  }

  const textBackground = window.getComputedStyle(el).getPropertyValue('--text').trim()
  const fillColor = textBackground.startsWith('#') ? hexaToRgba(textBackground) : extractRGBValues(textBackground)

  const width = window.innerWidth
  const height = window.innerHeight

  el.width = width
  el.height = height

  const columns = Math.ceil(width / (DotSize + DotSpacing))
  const rows = Math.ceil(height / (DotSize + DotSpacing))
  const activationThreshold = Math.random() * 0.1 + 0.9

  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = `rgba(${fillColor.r}, ${fillColor.g}, ${fillColor.b}, 0.08)`

  for (let row = 0; row < rows; row++) {
    const y = row * (DotSize + DotSpacing)
    for (let column = 0; column < columns; column++) {
      const x = column * (DotSize + DotSpacing)
      if( activationThreshold < Math.random()) {
        drawRoundedRect(ctx, x, y, DotSize, DotSize, 1)
      }
    }
  }
}

onMounted(() => {
  const rafThrottleRepaintCanvas = rafThrottle(repaintCanvas)
  const mediaQuery = matchMedia?.('(prefers-color-scheme: dark)')

  window.addEventListener('resize', rafThrottleRepaintCanvas)
  window.addEventListener('wheel', rafThrottleRepaintCanvas)

  mediaQuery.addEventListener('change', rafThrottleRepaintCanvas)
  rafThrottleRepaintCanvas()

  onBeforeUnmount(() => {
    window.removeEventListener('resize', rafThrottleRepaintCanvas)
    window.removeEventListener('wheel', rafThrottleRepaintCanvas)
    mediaQuery.removeEventListener('change', rafThrottleRepaintCanvas)
  })
})

</script>

<template>
<teleport to="body">
  <canvas ref="canvas"></canvas>
</teleport>

</template>

<style lang="less" scoped>
canvas {
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  pointer-events: none;
}
</style>
