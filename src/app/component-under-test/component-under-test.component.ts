import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-component-under-test',
  templateUrl: './component-under-test.component.html',
  styleUrls: ['./component-under-test.component.css']
})
export class ComponentUnderTestComponent implements OnChanges {
  @Input() input;
  constructor() { }

  ngOnChanges() {
    this.processInput();
  }

  processInput(): void {
    this.input = this.input.toUpperCase();
  }
}
