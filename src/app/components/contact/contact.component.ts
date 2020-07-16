import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  createFormGroup() {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('')
    });
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }
  
  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    /* Esto es para ver en la consola que se envia los objetos por el metodo
    console.log('Saved', this.contactForm.value);
    const newContact = {
      name: 'Ricardo',
      email: 'ri@gmail.com',
      message: 'Hola mundo'
    }*/
    this.dbData.saveMessage(this.contactForm.value);
  }

}
