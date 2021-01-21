const app= Vue.createApp({

    data() {
        return{
            titulo: 'Hola mundo con vue.js',
            nombre: 'Liz',
            enlace: 'https://youtube.com',
            estado: false,
            fechaw: new Date(),
            servicios: ['transferencias', 'pagos', 'giros','cheques'],
            desactivar: false
        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad=this.cantidad+100
        },
        disminuirSaldo(valor){
            if(this.cantidad===0){
                this.desactivar=true
                alert('saldo en cero')
                return
            }
            this.cantidad=this.cantidad-valor
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad> 500 ? 'text-success': 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()

        },
        fecha(){
            var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            return this.fechaw.getDate()+ ' de ' + months[this.fechaw.getMonth()] + ' de ' + this.fechaw.getFullYear()
        },
        hora(){
            return this.fechaw.getHours() + ':' +  this.fechaw.getMinutes()
        },
        fechaN(){
            var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            var fechaN = [this.fechaw.getDate(),this.fechaw.getMonth(),this.fechaw.getFullYear()];
            return fechaN

        }
    }

})

