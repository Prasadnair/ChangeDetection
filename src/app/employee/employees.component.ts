
import { Component } from '@angular/core';
import { EmployeeInterface } from './employeeinterface';

@Component({
    selector:'app-employees',
    templateUrl:'./employees.component.html'
})
export class EmployeesComponent{

    emps: EmployeeInterface[] = [
        {
          id: '1',
          name: 'Prasad',
          isActive: true,
        },
        {
          id: '2',
          name: 'Praseed',
          isActive: true,
        },
    
        {
          id: '3',
          name: 'Prasoon',
          isActive: false,
        },
      ];


      changeText(): void {
        console.log('changeText');
      }
    
      changeArray(): void {
        /* this.todos[0].text = 'Foo'; */
        this.emps[0] = { ...this.emps[0], name: 'Foo' };
        console.log(this.emps);
      }

}