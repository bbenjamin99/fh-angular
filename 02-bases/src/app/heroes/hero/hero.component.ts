import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title :string = "Heroes App";

  public name: string = "Iron Man";
  public age : number = 45;
  get capitalizedName() : string{
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {

    return ` Nombre: ${this.name} - ${this.age} `;
  }

  changeName() : void {
    this.name = 'SpiderMan';
  }
  changeAge() : void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;

  }

}
