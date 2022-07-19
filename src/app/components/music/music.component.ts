import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @ViewChild('coverFile', {static: false}) InputCover!: ElementRef;
  @ViewChild('genres', {static: false}) GenresArray!: ElementRef;

  imageURL!: string;
  uploadForm!: FormGroup;
  genresArray : string[] = [];

  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
  }

  showPreviewCover(e: Event) {
    const file = (e.target as HTMLInputElement).files![0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar')!.updateValueAndValidity();

    
    const reader = new FileReader();
    reader.onload = () => 
      this.imageURL = reader.result as string;
    
    reader.readAsDataURL(file)
  }

  deletePreviewCover() {
    this.InputCover.nativeElement.value = "";
    this.imageURL = "";
  }

  addGenre() {

    var indice = this.GenresArray.nativeElement.selectedIndex;
    var selected_genre = this.GenresArray.nativeElement.options[indice].text;
    
    if(this.genresArray.indexOf(selected_genre) === -1) {
      this.genresArray.push(selected_genre);
    } else {
      console.log("Ya existe!");
    }
    
  }

  deleteSelectedRow(selectedGenre: string) {

    this.genresArray.splice(
      this.genresArray.indexOf(selectedGenre), 1);

  }

  ngOnInit(): void {
  }



}
function avatar(avatar: any, arg1: null[], name: void, arg3: string[]): FormGroup {
  throw new Error('Function not implemented.');
}

