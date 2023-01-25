import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T>{
  private baseUrl?: string
  constructor(baseUrl: string, private httpService: HttpClient) {
    this.baseUrl = baseUrl
  }

  create(endPoint: string): Promise<T>{
    return firstValueFrom(this.httpService.get<T>(this.baseUrl + endPoint))
  }

  read(endPoint: string): Promise<T>{
    return firstValueFrom(this.httpService.get<T>(this.baseUrl + endPoint))
  }

  update<T,R>(endPoint: string, body?:R): Promise<T>{
    return firstValueFrom(this.httpService.put<T>(this.baseUrl + endPoint, body))
  }

  delete<T>(endPoint: string): Promise<T>{
    return firstValueFrom(this.httpService.delete<T>(this.baseUrl + endPoint))
  }

}
