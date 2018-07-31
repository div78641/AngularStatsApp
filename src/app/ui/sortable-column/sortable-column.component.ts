import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input('sortable-column')
  columnName: string;

  // tslint:disable-next-line:no-input-rename
  @Input('sort-direction')
  sortDirection = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  ngOnInit() {
  }

}
