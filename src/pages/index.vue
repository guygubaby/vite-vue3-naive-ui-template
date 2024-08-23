<script lang="ts" setup>
const messageApi = useMessage()

const handleClick = () => {
  messageApi.success('Hello, world!')
}
</script>

<template>
  <main class="mx-auto h-screen max-w-2xl fc flex-col gap-4">
    <h1>It works</h1>
    <n-button @click="handleClick">
      Click me
    </n-button>
  </main>
</template>
