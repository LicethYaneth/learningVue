<template>
  <h1>Resumen de tu orden</h1>
  <h3>Monto final a pagar: {{total}}<br>
  Medio de pago: {{pago}}<br>
  Pago Contra Entrega: {{contra_e ? 'Disponible' : 'No disponible'}}</h3>
  <div v-for="(servicio, index) in productos" :key="index">
      {{index+1}}. {{ servicio }}
  </div>
  <Total />
</template>

<script>
import Total from './Total'
export default {
    components: {
        Total
    },
    data() {
        return {
            total: '$294.800',
            pago: 'Tarjeta de crédito',
            contra_e: true,
            envio_p:0,
            productos: ['Combo Escritorio + Biblioteca','Centro de cómputo maderkit color wengue']

        }
    },
    methods: {
        envio(){
            {{this.contra_e ? this.envio_p=7500 : this.envio_p=0}}
        },
        total_c(){
            return this.total+this.envio_p
        }
    }

}
</script>

<style>

</style>