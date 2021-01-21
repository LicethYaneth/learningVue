app.component('meses-izq',{
    props:['valor', 'fecha'],
    template: /*html*/`
    <div class="float-left pb-5 px-5">
        <button type="submit" class="btn btn-warning">Agregar Evento</button>
    </div>
    `,
    data(){
        return{
            texto: 'Hola '
        }
    }
})  

