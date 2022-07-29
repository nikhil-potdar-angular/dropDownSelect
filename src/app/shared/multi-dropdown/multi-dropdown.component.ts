import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../multi-dropdown/multi-dropdown.model';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.scss']
})
export class MultiDropdownComponent implements OnInit {
  _items: Item[] = []
  filtered: Item[] = []
  isAllChecked: boolean = false
  isChecked: boolean = false
  checkedArr:any=[]

  @Output() changeItem=new EventEmitter<Item>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.isAllChecked)
    console.log(this.isChecked)
  }

  @Input('items')
  set items(items:Item[]) {
    this._items = items
    this.filtered = [...this._items]
    console.log(this.filtered)
  }

  private searchText = ''

  @Input()
   set search(searchText:string) {
    this.searchText = searchText
    const search = searchText.toLocaleLowerCase()
    if (!search) {
      this.filtered = [...this._items]
      return
    }
    this.filtered=this._items.filter(item=>item.name.indexOf(search)!=-1)
   }

  checkUnckeckAll() {
    this.filtered.forEach(item => item.checked = this.isAllChecked)
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.isAllChecked = this.filtered.every(item => item.checked == true)
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    this.checkedArr= this.filtered.filter(item => item.checked)
    console.log(this.checkedArr)
    this.changeItem.emit(this.checkedArr)
  }
}
