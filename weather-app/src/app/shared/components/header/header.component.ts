import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isMenuClicked = new EventEmitter<void>();
  @Output() searchValue = new EventEmitter<string>();
  searchMode = false;
  search = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isMenuClicked.emit();
  }

  onSearch(): void {
    if (this.search.valid) {
      this.searchValue.emit(this.search.value);
      this.search.reset();
      this.searchMode = !this.searchMode;
    }
    else {
      this.searchMode = !this.searchMode;
    }
  }

  onClear(): void {
    this.search.reset();
    this.searchMode = !this.searchMode;
  }
}
