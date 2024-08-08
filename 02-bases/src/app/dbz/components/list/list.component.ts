
import {Component, Input } from '@angular/core';
import { Employ } from '../../interfaces/employ.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})

export class ListComponent { 

  @Input()
  public employList : Employ[] = [
    {name:"Benja", id:1},
    {name:"Mica", id:2},
    {name:"Rocky", id:3},
  ]

}
