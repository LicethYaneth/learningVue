app.component("agenda", {
    props: ["valor", "fecha", "mes"],
    template: /*html*/ `
      <div class="agenda d-flex flex-column align-items-center" style="width: 250px">
          <h5 class="border-bottom p-2 m-0">Tu agenda de hoy</h5>
          <div class="d-flex flex-column flex-fill p-2 justify-content-start">
              <a href="#">
                <div></div>
                <span>Tarea</span>
                <span class="ml-auto hora">17:40</span>
              </a>
          </div>
          <div class="btn-agenda ml-auto">
            <button type="submit" class="btn btn-warning mb-3">Agregar agenda</button>
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
  