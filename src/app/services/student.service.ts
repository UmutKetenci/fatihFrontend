import { Injectable } from '@angular/core';
import {BaseService} from "./shared/base.service";
import {StudentDto} from "../models/StudentDto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<StudentDto>{

  constructor(httpService: HttpClient) {
    super('studentService', httpService)
  }
}
