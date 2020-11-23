
app.component('head-calendar',{
    props:['valor', 'fecha','hora'],
    template: /*html*/`
    <div class="bg-light text-black" style="display">
        <div class="box bg-light py-3 px-5 ">
        <h2>
             {{texto}} {{valor}}
        </h2>
        <small>
            Hoy es {{fecha}}<br>
            Son las {{hora}} 
        </small>
        </div>
        <div class="box float-right bg-light">
            <img src="https://source.unsplash.com/random/1400x20">
        </div>
    </div>
    `,
    data(){
        return{
            texto: 'Hola '
        }
    }
})