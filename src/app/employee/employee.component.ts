import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { EmployeeInterface } from './employeeinterface'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //comment this line and see the difference in rendering
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {
  @Input('emp')
  emprecord!: EmployeeInterface;

filter$:Observable<string> | undefined;

constructor(private empService:EmployeeService){
this.filter$ =empService.filter$;
}

checkRender(): boolean {
  console.log('checking Render!!');
  return true;
}

changeText(): void {
  this.emprecord.name = 'Name changed from inside';
}

changeFilter(): void {
  this.empService.filter$.next('active');
}

}
