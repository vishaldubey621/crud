import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  [x: string]: any;

  constructor(private _http:HttpClient ) { 
  }

  // function Add user to in table
  public creatuser(users)
  {
    
   return this._http.post('http://localhost:3000/user',users);  //post data to db.json(user)
   
  }

  //Get all user for display value
  public getAllUser()
  {
    return this._http.get('http://localhost:3000/user')  //get data from db.json(user)
  }

  //delete user
  public deleteUser(user)
  {
    return this._http.delete('http://localhost:3000/user/' +user.id)
  }

  //get  id for eidtUser
  public getById(user)  
  {
    
    return this._http.get('http://localhost:3000/user/', user)
    debugger
    
  }
}

