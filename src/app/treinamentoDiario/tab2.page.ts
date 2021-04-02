import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public form = [
    { val1: 'Alongamento de Coluna', isChecked: true },
 
  ];
  public form1 = [
    { val: 'Supino', isChecked: true },
  ]; 

  public form2 = [
    { val2: 'Abdômem', isChecked: true },
  ];
  constructor() {}


}
