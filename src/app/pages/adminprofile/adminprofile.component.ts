import { Component,AfterViewInit, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';
import { S3Service } from 'src/app/core/S3.service';


@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {

  data: any;
  adminprofile: any;
  defaultImageUrl: any;
  apiImageUrl: any;

  expression: any;
  d: any;
  progress = 0;
  imageUrl!: string;
 

  constructor(private http: HttpClient, private api: ApiService, private route: Router,private s3Service: S3Service) { }

  ngOnInit(): void {
    this.api.mydetail().subscribe((data: any) => {
      this.data = data;
      this.adminprofile = data[0];
      this.apiImageUrl = data[0].image;
      console.log(this.apiImageUrl, 'ffddfdffd');

      this.apiImageUrl = data[0].image.toString();

      if (this.adminprofile.image >= 0) {
        console.log('poiuyrewwqetyu');
        this.expression = true;
        this.d = "d-none"
        return true
      } else {
        console.log('qwerttyuiopp');
        this.expression = false;
        return
      }
    });
  }

  onFileSelected(event:any): void {
    // const bucketName = 'developmentdocumentmyjobs'
    const file = event.target.files[0];
    this.s3Service.uploadFile(file).subscribe(
      progress => (this.progress = progress),
      error => console.error(error),
      () => (this.imageUrl = `https://${this.s3Service.bucketName}.s3.amazonaws.com/${file.name}`)
    );
  }

  setDefaultImage() {
    this.apiImageUrl = this.defaultImageUrl;
  }
}
