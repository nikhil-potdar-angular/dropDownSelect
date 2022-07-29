import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from 'src/app/shared/multi-dropdown/multi-dropdown.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  items: Item[] = []
  checkedArr:any=[]
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.items = this.service.getFoods().map(fruit => ({
      id: fruit.id,
      name:fruit.name
    }) as Item)
  }
  changeItem(item: Item) {
    console.log(item)
    this.checkedArr =item
    // console.log(this.checkedArr)
  }

}
