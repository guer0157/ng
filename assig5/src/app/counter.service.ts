import { EventEmitter } from "@angular/core";

export class CounterService {
  constructor() {}
  counterEmmiter = new EventEmitter<number>();
}
