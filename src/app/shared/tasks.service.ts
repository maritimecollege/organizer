import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { from, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateResponse } from "../models/create-response.model";
import { Task } from "../models/task.model";
import * as Parse from 'parse';
import { MessageService } from "primeng/api";
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public static url = environment.fireBaseUrl;

  constructor(private http: HttpClient, private _messageService: MessageService){}

  load(entityName: string): Observable<any> {
    const parseEntity = new Parse.Query(entityName);
    return from(parseEntity.findAll())

  }

  create(entity: any, entityName: string): Observable<any>{
    
    //Create your Parse Object
    const parseEntity = new Parse.Object(entityName);
    //Define its attributes
    Object.keys(entity).forEach((element: any) => {

      if(entity[element] != 'id'){
        // if(typeof entity[element] == "object") {
        //   const t = new Parse.Query(element).equalTo("Id", entity[element].Id)
        //   console.log(t)
        //   parseEntity.set(element, t)
        // }else {
          parseEntity.set(element, entity[element])
        // }
        
      }
      parseEntity.set("Id", Guid.create().toString())

    });
    try {
      //Save the Object
      const result = parseEntity.save() as any;
      this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Успешно добавлено' });
    
      
      return of(result.id);
    } catch (error: any) {
      alert('Failed to create new object: ' + error?.message);
      return of(error.message);

    }
  }

  update(entity: any, entityName: string){
    const parseEntity = new Parse.Query(entityName);
     //Define its attributes
     parseEntity.equalTo("Id", entity['Id']).first().then(function (ent) {

      if(ent) {
        Object.keys(entity).forEach((element: any) => {

          if(element != 'Id'){
            ent.set(element, entity[element])
          }
    
        });
        try {
          //Save the Object
          const result = ent.save().then(() => {
            window.location.reload();
          }) as any;
          
          return of(result.id);
        } catch (error: any) {
          alert('Failed to create new object: ' + error?.message);
          return of(error.message);
    
        }
      }
      
      return '';
    }

    )
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Успешно обновлено' });
    
  }

  remove(entity: any, entityName: string) {
     //Create your Parse Object
     const parseEntity = new Parse.Query(entityName);
     //Define its attributes
     parseEntity.equalTo("Id", entity['Id']).first().then(function (ent) {

      if(ent) {
        ent.destroy().then(() => {
          window.location.reload();
        })
      }
    })
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Успешно удалено' });
    

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