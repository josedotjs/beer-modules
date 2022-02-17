export default function ({ $primero }, inject) {
  $primero('Hola desde segundo')
  inject('segundo', (msg) => console.log(`Segundo: ${msg}`))
}
