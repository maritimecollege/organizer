import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { from, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateResponse } from "../models/create-response.model";
import { Task } from "../models/task.model";
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public static url = environment.fireBaseUrl;

  constructor(private http: HttpClient){}

  load(entityName: string): Observable<any> {
    const parseEntity = new Parse.Query(entityName);
    let returnEntities: any = []; 
     return from(parseEntity.findAll())

  }

  create(entity: any, entityName: string): Observable<any>{
    
    //Create your Parse Object
    const parseEntity = new Parse.Object(entityName);
    //Define its attributes
    Object.keys(entity).forEach((element: any) => {
      console.log(element)
      if(element != 'id'){
        parseEntity.set(element, entity[element])

      }
    });
    try {
      //Save the Object
      const result = parseEntity.save() as any;
      alert('New object created with objectId: ' + result.id);
      return of(result.id);
    } catch (error: any) {
      alert('Failed to create new object: ' + error?.message);
      return of(error.message);

    }
  }

  remove(entity: any, entityName: string) {
     //Create your Parse Object
     const parseEntity = new Parse.Query(entityName);
     //Define its attributes
     parseEntity.first().then(function (ent) {
      if(ent) {
        ent.destroy()
      }
     })
    //  try {
    //    //Save the Object
    //    const result = parseEntity.save() as any;
    //    alert('New object created with objectId: ' + result.id);
    //    return of(result.id);
    //  } catch (error: any) {
    //    alert('Failed to create new object: ' + error?.message);
    //    return of(error.message);
 
    //  }
  }
}