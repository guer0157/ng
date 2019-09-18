import { EventEmitter } from "@angular/core";

export class CounterService {
  constructor() {}
  ToActiveclickCounter: number = 0;
  ToInactiveclickCounter: number = 0;
  counterEmmiter = new EventEmitter<boolean>();
  checkCount(toActive: boolean) {
    if (toActive) {
      this.ToActiveclickCounter = this.ToActiveclickCounter + 1;
      this.counterEmmiter.emit();
    } else {
      this.ToInactiveclickCounter = this.ToInactiveclickCounter + 1;
      this.counterEmmiter.emit();
    }
  }
}
