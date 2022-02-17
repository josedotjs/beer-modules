<template>
  <div class="beerjs">
    Hola App 1
    <common-base-input label="Nombre" placeholder="Ingrese su nombre" />
    <common-base-input label="Password" type="password" placeholder="1234" />
    <button @click="showLocalMessage">Mostrar mensaje</button>
    <button @click="showApiMessage">Saludo desde api</button>
  </div>
</template>
<script>
export default {
  methods: {
    showLocalMessage() {
      this.$toast.show('Hola beerjs')
    },
    async showApiMessage() {
      const { data } = await this.$axios.get('/hola')
      this.$toast.show(data)
    },
  },
}
</script>
