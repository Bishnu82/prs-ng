import { Injectable } from '@angular/core';
import { SystemService } from './system.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';
import { LineItem } from '../model/line-item.class';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  url: string = 'http://localhost:8080/line-items/';

  constructor(private sysSvc: SystemService,
              private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }

  get(id): Observable<JsonResponse> {
    return this.http.get(this.url + "Get/" + id) as Observable<JsonResponse>;
  }

  save(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(this.url + "Create", lineitem) as Observable<JsonResponse>;
  }

  update(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(this.url + "Change", lineitem) as Observable<JsonResponse>;
  }

  delete(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(this.url + "Remove", lineitem) as Observable<JsonResponse>;
  }

}