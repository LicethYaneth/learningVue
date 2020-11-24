app.component("agenda", {
    props: ["valor", "fecha", "mes"],
    template: /*html*/ `
      <div class="agenda d-flex flex-column align-items-center" style="width: 250px">
          <h5 class="border-bottom p-2">Tu agenda de hoy</h5>
          <div class="d-flex flex-column flex-fill p-2 pt-0 justify-content-start">
              <a href="#">Holas</a>
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
  