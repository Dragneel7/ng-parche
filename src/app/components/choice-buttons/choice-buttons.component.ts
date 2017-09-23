import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choice-buttons',
  templateUrl: './choice-buttons.component.html',
  styleUrls: ['./choice-buttons.component.css']
})
export class ChoiceButtonsComponent implements OnInit {
  @Input() options: string[];
  currentlySelectedIndex: number;

  onSelect(option: string): void {
    let newlySelectedIndex = this.options.indexOf(option);

    if (this.currentlySelectedIndex === -1) {
      this.select(newlySelectedIndex);
    } else {
      this.deselect(this.currentlySelectedIndex);
      if (newlySelectedIndex === this.currentlySelectedIndex) {
        newlySelectedIndex = -1;
      } else {
        this.select(newlySelectedIndex);
      }
    }
    this.currentlySelectedIndex = newlySelectedIndex;
  }

  select(index: number): void {
    this.options[index] = '*' + this.options[index];
  }

  deselect(index: number): void {
    this.options[index] = this.options[index].substr(1);
  }

  ngOnInit() {
    this.currentlySelectedIndex = -1;
  }
}
