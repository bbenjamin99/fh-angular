import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];

  public deletedHeroes? :string;
  //Methods
  removeLastHero() : void {
      this.deletedHeroes = this.heroNames.pop();
  }


}
