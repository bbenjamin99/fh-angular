import { Component } from "@angular/core";

@Component({
  selector:'gifs-search',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control " placeholder="Buscar Gifs">`
})

export class SearchGifsComponent {
  constructor() {}
}
