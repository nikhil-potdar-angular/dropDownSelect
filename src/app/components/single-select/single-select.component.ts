import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from 'src/app/shared/dropdown/dropdown.model';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {
  items: Item[] = []
  currentSelectedItem: any
  showStatus:boolean=true
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.items = this.service.getFoods().map(fruit => ({
      id: fruit.id,
      name: fruit.name
   }) as Item)
     console.log(this.items)
  }
  onItemChange(event: Item): void {
    this.currentSelectedItem=event
      console.log(this.currentSelectedItem)
  }
  onToggleStatus() {
    this.showStatus=!this.showStatus
  }

}
