import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { statut } from '../home/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  statut:statut[]=[]
  post_id:any
  constructor(private addpostService: AddPostService,private Router :Router,private route:ActivatedRoute){
  }
  ngOnInit():void{
    this.post_id=this.route.snapshot.params['id']
    this.getposts()
  

  }
  handlelogout(){
    localStorage.removeItem('token')
    this.Router.navigate([''])
  }
  getposts(){
    this.addpostService.getpost().subscribe((response:any)=>{
  this.statut=response
  
  console.log(response)
    })
  }
deletepost(post_id:any){
  if(window.confirm(`Do You Want To Delete this post with ID : ${post_id} Admin` )) {
    this.addpostService.deletepost(post_id).subscribe((response:any)=>{

  window.location.reload()
  

    })
  }
  }


}
