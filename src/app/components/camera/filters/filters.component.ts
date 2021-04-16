import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Input() img: any ;
  @Output() selectedFilter = new EventEmitter<string>();

  filters = [
    'original', '_1977', 'aden', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'gingham', 'hudson',
  ]
  constructor() { }

  ngOnInit(): void {
    // console.log(this.img)
  }

  handleClick(val) {
    this.selectedFilter.emit(val);
  }

}
