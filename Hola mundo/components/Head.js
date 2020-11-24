
app.component('head-calendar',{
    props:['valor', 'fecha','hora'],
    template: /*html*/`
    <div class="d-flex flex-row border-bottom" style="display">
        <div class="mascara"></div>
        <div class="d-flex flex-column p-3 mr-auto titulo">
            <h2>
                {{texto}} {{valor}}
            </h2>
            <small>
                Hoy es {{fecha}}<br>
                Son las {{hora}} 
            </small>
        </div>
        <div>
            <img class="barra-img" src="https://source.unsplash.com/random/1440x117">
        </div>
    </div>
    `,
    data(){
        return{
            texto: 'Buenos días,'
        }
    }
})