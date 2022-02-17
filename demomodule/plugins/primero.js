export default function (context, inject) {
  inject('primero', (msg) => console.log(`Primero: ${msg}`))
}
