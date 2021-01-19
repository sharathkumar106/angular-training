import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() show: boolean;
  @Output() closeMenu = new EventEmitter<void>();
  date: Date;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

  onClose(): void {
    this.closeMenu.emit();
  }
}
