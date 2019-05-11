import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  
  ngOnInit(): void {
   
  }

  private addPage : FormGroup;
  public base64Image;
  private options: CameraOptions = {
    quality: 20,
    destinationType: this._camera.DestinationType.FILE_URI,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE,
   // allowEdit: true,
    correctOrientation: true
  }

  constructor(private _router:Router,  
    private formBuilder: FormBuilder, 
    private _camera: Camera,
    private file: File) {

    this.addPage = this.formBuilder.group({
      nome: ['', Validators.required],
      identificacao: ['', Validators.required]
    });
    
   }

   public takePhoto(){
    this._camera.getPicture(this.options).then((imageData) => {
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
         //then use the method reasnavigateByUrDataURL  btw. var_picture is ur image variable
      this.file.readAsDataURL(path, filename).then(res=> this.base64Image = res  ).catch(err=>{
        alert("erro2" + err);
        this.base64Image = null;  
      });
     }, (err) => {
      alert("erro1" + err);
      this.base64Image = null;
     });
   }


   public callRegister(){
    let identifier = "1"
    this.base64Image = null;
    this.addPage.reset();
    this._router.navigateByUrl("/tabs/gado/detail/"+identifier);
   }


}
