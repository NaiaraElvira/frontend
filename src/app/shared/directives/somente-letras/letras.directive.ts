import { Directive, ElementRef, OnInit, AfterViewInit, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({selector: '[appLetras]'})
export class LetrasDirective implements  AfterViewInit{

    @Output() 
    onPressEnter: EventEmitter<any> = new EventEmitter();

    $:any;
    input:any;

    arrayNumber:any[] = ["0","1","2","3","4","5","6","7","8","9"];
    arrayFunction:any[] = [, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]


    constructor(private element: ElementRef){}


    ngAfterViewInit(){
        this.input = this.element.nativeElement;
    }

    @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
        if (event.key == "Enter")
         this.onPressEnter.emit()
        else if (this.arrayFunction.indexOf(event.key) < 0) 
            this.input.value = this.input.value.replace(/[0-9]/g, '');
    }

}