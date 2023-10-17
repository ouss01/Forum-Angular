import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(data:any){
    return this.httpClient.post('http://localhost:9092/SpringMVC/api/posts/',data,{
      headers:new HttpHeaders().set('content-type' ,'application/json')
    });
  }
  
  createmessage(data:any,sender_id:any,receiver_id:any){
    return this.httpClient.post('http://localhost:9092/SpringMVC/api/chat/'+sender_id+'/'+receiver_id,data)
  }
  login(data:any){
    return this.httpClient.post('http://localhost:9092/SpringMVC/api/auth/login',data,{
      headers:new HttpHeaders().set('content-type' ,'application/json')
    });
  }

register(data:any){
    return this.httpClient.post('http://localhost:9092/SpringMVC/api/auth/signup',data,{
      headers:new HttpHeaders().set('content-type' ,'application/json')
    });
  }
  getpost(){
    return this.httpClient.get('http://localhost:9092/SpringMVC/api/posts/all')
  }
  getreceivers(sender_id:any){
    return this.httpClient.get('http://localhost:9092/SpringMVC/api/chat/receivers/'+sender_id)
  }
  reaction(data:any,post_id:any,user_id:any){
    return this.httpClient.post('http://localhost:9092/SpringMVC/api/posts/'+post_id+'/reactions/'+user_id,data,{
      headers:new HttpHeaders().set('content-type' ,'application/json')})

  }
  getreaction(post_id:any,user_id:any){
    return this.httpClient.get(' http://localhost:9092/SpringMVC/api/posts/posts/'+post_id+'/reactions/'+user_id)

  }
  deletereaction(user_id:any,post_id:any){
    return this.httpClient.delete('http://localhost:9092/SpringMVC/api/posts/reactions/'+post_id+'/'+user_id)
  }
  getcurrentuser(){
    return this.httpClient.get(' http://localhost:9092/SpringMVC/api/auth/user')

  }
  getmessage(sender_id:any){
    return this.httpClient.get('http://localhost:9092/SpringMVC/api/chat/receivers/'+sender_id)
  }
  
  deletepost(post_id:any){
    return this.httpClient.delete('  http://localhost:9092/SpringMVC/api/posts/'+post_id)
  }

}

