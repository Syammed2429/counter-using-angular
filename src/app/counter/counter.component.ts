import { Component } from '@angular/core';

@Component({
    selector: 'app-counter', 
    templateUrl: './counter.component.html'
})

export class CounterComponent{
    counter: number = 0;
    
    addCounter() {
        this.counter += 1;
    }

    subCounter() {
        this.counter -= 1;

    }

}