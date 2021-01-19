import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isMenuClicked = new EventEmitter<void>();
  @Output() searchValue = new EventEmitter<string>();
  searchMode = false;
  search = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isMenuClicked.emit();
  }

  onSearch(): void {
    this.searchValue.emit(this.search.value);
    this.searchMode = !this.searchMode;
  }
}
