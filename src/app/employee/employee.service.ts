import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class EmployeeService{
filter$ =new BehaviorSubject('all');

}