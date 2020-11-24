app.component("calend_macro", {
  props: ["mes"],
  template: /*html*/ `
    <div class="d-flex justify-content-around py-3" id="macro-calend">
        <div v-for="(item,index) in dias"><span>{{item}}</span></div>
    </div>
    <div class="sqr-macro-calendario">
      <div v-if="mes===2" v-for="d in 28"><span>{{d}}</span></div>
      <div v-if="mes===1 || mes===3 || mes===5 || mes===7 || mes===8 || mes==10 || mes===12" v-for="d in 31"><span>{{d}}</span></div>
      <div v-if="mes===4 || mes===6 || mes===9 | mes===11" v-for="d in 30"><span>{{d}}</span></div>
    </div>
    `,
    data() {
      return {
        texto: "Hola ",
        dias: ["D", "L", "M", "M", "J", "V", "S"],
      };
    },
});
