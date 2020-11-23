app.component('meses-izq',{
    props:['valor', 'fecha'],
    template: /*html*/`
    <div class="bg-light text-black float-left py-5 px-5" style="display:block">
        <button type="submit" class="btn btn-warning">Agregar Evento</button>

    </div>
    `,
    data(){
        return{
            texto: 'Hola '
        }
    }
})  

