import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  HostBinding
} from "@angular/core";
@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  constructor(private dropdownList: ElementRef) {}
  ngOnInit() {}
  @HostBinding("class.open") isOpen: boolean = false;

  @HostListener("click") whenDropdownClicked() {
    this.isOpen = !this.isOpen;
  }
}
