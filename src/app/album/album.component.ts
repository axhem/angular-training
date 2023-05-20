import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumFormGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createAlbumForm();
  }

  createAlbumForm() {
    this.albumFormGroup = new FormGroup({
      userid: new FormControl(null),
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
    });  
  }

  saveAlbums(): void {
    console.log(this.albumFormGroup);
    console.log(this.albumFormGroup.controls['title'].value);
    this.albumFormGroup.controls['title'].setValue('Ky eshte nje titull');
  }
}
