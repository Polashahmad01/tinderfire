<template>
  <div class="container container-xl">
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
