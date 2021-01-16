<template>
  <h1>Resumen de tu orden</h1>
  <h3>Monto final a pagar: {{total}}<br>
  Medio de pago: {{pago}}<br>
  Pago Contra Entrega: {{contra_e ? 'Disponible' : 'No disponible'}}</h3>
  <div v-for="(servicio, index) in productos" :key="index">
      {{index+1}}. {{ servicio }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            total: '$294.800',
            pago: 'Tarjeta de crédito',
            contra_e: true,
            productos: ['Combo Escritorio + Biblioteca','Centro de cómputo maderkit color wengue']

        }
    },

}
</script>

<style>

</style>