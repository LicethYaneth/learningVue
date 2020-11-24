app.component("calend_macro", {
  props: ["valor", "fecha"],
  template: /*html*/ `
  <div class="macro-calendario flex-fill">
    <div class="sqr-macro-calendario mx-auto">
        <div style="border:0px" v-for="(item,index) in dias">{{item}}</div>
        <div v-if="mes===2" v-for="d in 28">{{d}}</div>
        <div v-if="mes===1 || mes===3 || mes===5 || mes===7 || mes===8 || mes==10 || mes===12" v-for="d in 31">{{d}}</div>
        <div v-if="mes===4 || mes===6 || mes===9 | mes===11" v-for="d in 30">{{d}}</div>
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
