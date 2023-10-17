


import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router:Router,private auth:AuthService) { }
   checkRole:any;
canActivate(route:ActivatedRouteSnapshot):boolean{
  let expectedRoleArray=route.data
   expectedRoleArray=expectedRoleArray['expectedRole']

  const token :any=localStorage.getItem('token')

  var tokenPayload:any
  try{

  tokenPayload=jwt_decode(token)
  console.log( tokenPayload)  }
  catch(err){
    localStorage.clear()
    this.router.navigate([''])
  }
  let checkRole=false
  for(let i=0;i<expectedRoleArray['length'];i++)
  {
  if(expectedRoleArray[i]==tokenPayload.roles){
    checkRole=true
}
}
if(tokenPayload.roles=='admin'){
  if(this.auth.isauthantificated() && checkRole){

    return true
  }
 

  this.router.navigate(['admin'])


  return false

  }

if(tokenPayload.roles=='user'){
if(this.auth.isauthantificated() && checkRole){
  return true
}

this.router.navigate(['home'])

return false
}

else{
  this.router.navigate([''])
  localStorage.clear()

  return false
}
}}