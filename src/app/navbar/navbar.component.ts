import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  settings: string = "user-setting";
constructor(private Router :Router){
  
}
  handle() {
    const options = ["online", "away", "offline", "view profile", "edit profile", "activity log", "account setting", "log out"];

    this.settings = this.settings === "user-setting" ? "user-setting active" : "user-setting";

    options.forEach(option => console.log(option)); // example of using forEach with options array
  }
  messages : string ="dropdowns";
  handlemessage() {
    
    this.messages = this.messages === "dropdowns" ? "dropdowns active" : "dropdowns";
  }
  notification : string ="dropdowns";
  handlenotifications() {
    
    this.notification = this.notification === "dropdowns" ? "dropdowns active" : "dropdowns";
  }
  handlelogout(){
    localStorage.removeItem('token')
    this.Router.navigate([''])
  }
}
