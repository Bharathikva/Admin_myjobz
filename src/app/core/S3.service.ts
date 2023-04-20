import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class S3Service {
  public bucketName = 'developmentdocumentmyjobs';
  public s3: S3;
  public identityPoolId = 'ap-south-1:5023f379-9d16-4178-81c8-f2f430b15e74';

  constructor() {
    AWS.config.region = 'your-region';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: this.identityPoolId
    });
    this.s3 = new S3({
      apiVersion: '2006-03-01',
      params: { Bucket: this.bucketName }
    });
  }

  uploadFile(file: File): Observable<number> {
    const params:any = {
      Key: file.name,
      Body: file,
      ACL: 'public-read'
    };

    const options = {
      partSize: 10 * 1024 * 1024,
      queueSize: 1
    };

    return new Observable(observer => {
      this.s3.upload(params, options, (err:any, data:any) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(data.Location);
          observer.complete();
        }
      }).on('httpUploadProgress', progress => {
        const uploadedBytes = progress.loaded;
        const totalBytes = progress.total;
        const progressPercent = Math.round((uploadedBytes / totalBytes) * 100);
        observer.next(progressPercent);
      });
    });
  }
}