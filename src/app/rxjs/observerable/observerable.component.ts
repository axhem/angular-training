import { Component, OnInit } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-observerable',
  templateUrl: './observerable.component.html',
  styleUrls: ['./observerable.component.css']
})
export class ObserverableComponent implements OnInit {

  //krjo nje object.
  myObserverable = new Observable(observer =>{
    console.log('observer start');
    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");

    setTimeout(()=>{observer.next("1");},1000)
    setTimeout(()=>{observer.next("2");},2000)

    setTimeout(()=>{observer.next("3");},3000)
    setTimeout(()=>{observer.next("4");},4000)
    setTimeout(()=>{observer.next("5");},5000)

    // si mund te behet emit nje error nese dicka shkon keq.
    setTimeout(()=>{observer.error(new Error('Dicka ka shkuar keq, Provoni me vone!'));},4000)


    //metoda e 3 eshte metoda complete si me poshte:
    setTimeout(()=>{observer.complete();},2000);

    //pasi behet complete nuk mund te behet emit vlera te tjera, psh nuk mund te shohim vlerat e reja.
    //    setTimeout(()=>{observer.complete();},2000); 


  })

  //of operator 

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    //subscribe merr 3 parametra
    //1. next, error, complete
    //te dhenat jan ber stream nje per nje 
    //te dhenat nuk kan ardhur ne te njejten kohe(si behet ne promises);

    // si mund te bejm handle nje error ne subscribe?
    this.myObserverable.subscribe((vlerat)=>{
      console.log(vlerat);
    },
    (error)=>{
      console.log(error.message);
    },
    ()=>{
      console.log('completetd')
    }
    );


    //of operator
    // of(10, 20, 30)
    // .subscribe({
    //   next: value => console.log('next:', value),
    //   error: err => console.log('error:', err),
    //   complete: () => console.log('the end'),
    // });
  }



}
