
import {Component, Input } from '@angular/core';
import { Employ } from '../../interfaces/employ.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})

export class ListComponent {

  @Input()
  public employList : Employ[] = [
    {name:"Benja", legajo:1},
    {name:"Mica", legajo:2},
    {name:"Rocky", legajo:3},
  ]

}
