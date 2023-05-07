import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  numri: number = 5;

  notat = [
    {
      'id': 1,
      'math': 8,
      'physics':9,
      'literature': 10 
    },
    {
      'id': 2,
      'math': 8,
      'physics':9,
      'literature': 10 
    },
    {
      'id': 3,
      'math': 8,
      'physics':9,
      'literature': 10 
    },
    {
      'id': 9,
      'math': 8,
      'physics':9,
      'literature': 10 
    },
    {
      'id': 6,
      'math': 8,
      'physics':9,
      'literature': 10 
    }
  ];
  constructor() { }

  ngOnInit(): void {

    if(this.numri ===5){
      console.log('Numri eshte 5')
    }else{
      console.log('Numri eshte i ndryshem nga 5');
    }

    this.shfaqNotatNeConsole();
  }


  shfaqNotatNeConsole(){
    this.notat.forEach(nota => {
      console.log(nota);
    })
  }
  fshiNoten(index:number, id:number): void {
    // this.notat.splice(index,1);
     this.notat.filter(nota => nota.id !==id);
     this.notat.find(nota => nota.id !==id);
     this.notat.findIndex(nota => nota.id ===id);
    console.log(this.notat);
  }
}
