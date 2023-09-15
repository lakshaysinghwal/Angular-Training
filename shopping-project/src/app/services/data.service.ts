import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //injecting the HttpClient as a dependency
  constructor(private http:HttpClient) { }

  readData(url: string) {
    return this.http.get(url)
  }

  createData(url:string, newdata:any) {
    return this.http.post(url, newdata)
  }

  updateData(url:string, modifiedData:any) {
    return this.http.put(url+"/"+modifiedData.id, modifiedData)
  }

  deleteData(url:string, id:number) {
    return this.http.delete(url+"/"+id)
  }
}
