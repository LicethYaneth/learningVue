app.component("meses-izq", {
  props: ["valor", "fecha", "mes"],
  template: /*html*/ `
    <div class="d-flex flex-column align-items-center py-3 barra-evento">
        <button type="submit" class="btn btn-warning mb-3">Agregar Evento</button>
        <div class="d-flex  flex-row flex-nowrap flex-shrink-1 pb-2">
            <select name="dob-month" class="browser-default custom-select">
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
            <select name="dob-year" value="2020" class="browser-default custom-select">
	            <option value="2020">2020</option>
	            <option value="2021">2021</option>
	            <option value="2022">2022</option>
	            <option value="2023">2023</option>
	            <option value="2024">2024</option>
            </select>
        </div>
        <div class="mini-calendario">
            <div class="sqr-calendario">
                <div style="border:0px" v-for="(item,index) in dias">{{item}}</div>
                <div v-if="mes===2" v-for="d in 28">
                  <a href="#">{{d}}</a>
                </div>
                <div v-if="mes===1 || mes===3 || mes===5 || mes===7 || mes===8 || mes==10 || mes===12" v-for="d in 31">
                  <a href="#">{{d}}</a>
                </div>
                <div v-if="mes===4 || mes===6 || mes===9 | mes===11" v-for="d in 30">
                  <a href="#">{{d}}</a>
                </div>
            </div>
        </div>
    </div>
    `,
  data() {
    return {
      texto: "Hola ",
      dias: ["D", "L", "M", "M", "J", "V", "S"],
    };
  },
});
