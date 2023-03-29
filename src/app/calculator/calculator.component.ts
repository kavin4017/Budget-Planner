import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result = '';
  isResulted = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkResulted(){
    if(this.isResulted){
      this.isResulted = false;
      this.result = '';
    }
    // else {
    //   this.isResulted = true;
    // }
  }

  onValueKeyClick(val: any){
    this.checkResulted();
    this.result = this.result + val;
  }

  onFunctionKeyClick(val: any){
    this.checkResulted();
    switch (val){
      case '+/-':
        // this.result = '-' + this.result;
        this.result = ( Number(this.result)*-1).toString();
        // this.result = eval('-' + this.result);
        break;
      case '^':
        this.result = this.result + val;
        // this.result = Math.( Number(this.result)).toString();
        break;
      case '%':
        this.result = this.result + val;
        break;
      case 'Sqrt':
        this.result = Math.sqrt( Number(this.result)).toString();
        break;
    }
  }

  onClearKeyClick(){
    this.result = '';
  }

  onBackspaceKeyClick(){
    this.result = this.result.slice(0, this.result.length-1);
  }

  onResultKeyClick(){
    this.result = eval(this.result);
    this.isResulted = true;
  }

}
