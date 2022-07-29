import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropdownComponent  {
  _items: Item[] = [];
  item: any = null;
  @Output() itemChange = new EventEmitter<Item>()
  @Input() showStatus=true

  @Input('items')
  set items(items: Item[]) {

        this._items = items;
        this._items.map(item => {
            item.visible = item.visible || true;
        });
    this.filtered = [...this._items];
    // console.log(this.filtered)
    }

  filtered: Item[] = [];
  private searchText=''

  get search() {
    return this.searchText
  }

  set search(searchText: string) {
    this.searchText = searchText
    const search = searchText.toLocaleLowerCase()

    if (!search) {
      this.filtered = [...this._items]
      return
    }
    this.filtered=this._items.filter(element=>element.name.indexOf(search)!=-1)
  }

  trackById(item: Item): any {
    return item.id;
  }

  onChange(item: Item) {
    this.item=item
    this.itemChange.emit(this.item)
  }
}
