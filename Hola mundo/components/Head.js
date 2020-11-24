
app.component('head-calendar',{
    props:['valor', 'fecha','hora'],
    template: /*html*/`
    <div class="bg-light" style="display">
        <div class="d-flex flex-column p-3">
            <h2>
                {{texto}} {{valor}}
            </h2>
            <small>
                Hoy es {{fecha}}<br>
                Son las {{hora}} 
            </small>
        </div>
        <div>
            <img class="barra-img" src="https://source.unsplash.com/random/1400x20">
        </div>
    </div>
    `,
    data(){
        return{
            texto: 'Hola '
        }
    }
})