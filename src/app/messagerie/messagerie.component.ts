
import { Component, OnInit } from '@angular/core';
import { AddPostService } from '../add-post.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  current: any;
  receivers: any;
  selectedUser: any;
  message: string=''
 send: any
messageform:any=FormGroup
  constructor(private formbuilder:FormBuilder,private addpostService: AddPostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.messageform=this.formbuilder.group({
 message:[null]
   
  })
   this.getCurrentUser();
   this.getmessagebyid()

  }

  createMessage() {
    const formdata=this.messageform.value


      this.addpostService.createmessage(this.message,this.current.id,   this.selectedUser.id).subscribe((data) => {

console.log(data)
this.send=data
      });
    
  }

  getCurrentUser() {
    this.addpostService.getcurrentuser().subscribe((data) => {
      this.current = data;
      console.log(this.current);
      this.getReceivers();
    });
  }
  getmessagebyid(){
    this.addpostService.getmessage(this.current.id).subscribe((data) => {
      
      console.log(data);})
  }

  getReceivers() {
    this.addpostService.getreceivers(this.current.id).subscribe((data) => {
      this.receivers = data;
      console.log(this.receivers);
    });
  }
}