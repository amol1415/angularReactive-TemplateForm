import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css'
})
export class ReactComponent {
  public stdForm: any;
  public formData: any = [];
  public count: number = 1;
  constructor(private fb: FormBuilder) {
    this.stdForm = this.fb.group({
      id: [''],
      fname: [''],
      email: [''],
      pass: ['']
    })
  }



  onSubmitData() {
    this.stdForm.value.id = this.count;
    this.count++;
    this.formData.push(this.stdForm.value);
    console.log(this.formData);

  }

  onDelete(data: any) {
    confirm("Are u sure to delete data ?")
    let index = this.formData.findIndex((ele: any) => ele.id === data.id);
    this.formData.splice(index, 1);
  }

  onUpdate(data: any) {
    this.stdForm.setValue({ ...data });
  }

  onUpdateit() {
    this.formData.forEach((x: any, index: any) => {
      if (x.id === this.stdForm.value.id) {
        this.formData.splice(index, 1, this.stdForm.value);
      }
    })

    // let index = this.formData.findIndex((ele: any) => ele.id == data.value.id);
    // if (index != -1) {
    //   this.formData.splice(index, 1, data.value);
    // }




  }

}
