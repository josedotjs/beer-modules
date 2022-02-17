<template>
  <div>
    Hola app 2

    <button @click="showMessage">Show Message</button>
  </div>
</template>
<script>
export default {
  methods: {
    showMessage() {
      this.$toast.show('Hola beerjs')
    },
  },
}
</script>
