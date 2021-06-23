import { Component } from '@angular/core';
import { CrudserviceService } from './crudservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  
    Formdata = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    phone : new FormControl(''),
    email : new FormControl('')


  })
  allUser: Object;   


  // public fname:string = "";
   //public lname:string = "";
   //public phone:any = ' ';
   //public email:string = "";

  //inject  Service (CrudService)
  constructor(private crudService:CrudserviceService) 
  {}
  ngOnInit()
  {
    this.getLatestUser();
  }
   
  //function for display data in console and add new user in form.
  public adduser(Formdata)
  {
        console.log(this.Formdata.value)
        this.crudService.creatuser(this.Formdata.value).subscribe((response)=>{
        this.getLatestUser();
         console.log("user has been added"); //mesage for testing data inserted or not
       })
  }
  

  //get the latest User
  public getLatestUser()
    {
        this.crudService.getAllUser().subscribe((response)=>{
        this.allUser = response 
         })
    }
    
  // finction for delete User  
      public deleteuser(user)
      {
          this.crudService.deleteUser(user).subscribe(()=>{
          this.getLatestUser();
      })
      }

  //function for edit user    
      public edituser(id:number)
      {
            this.crudService.getById(id).subscribe((data:any)=>{
              this.Formdata .patchValue(data)
              alert("data updated succesfully")
        })
      }  
  }
