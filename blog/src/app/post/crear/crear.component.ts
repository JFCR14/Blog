import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  
  form!: FormGroup;

  constructor(public postService: PostService, private router: Router) { }
      
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
      
  get controls() {
    return this.form.controls;
  }
        
  submit(){
    this.postService.create(this.form.value).subscribe((response: any) => {
         this.router.navigateByUrl('post/lista');
    });
  }
  
}

