import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public form = [
    { val1: 'Alongamento de Coluna', isChecked: true },

  ];
  public form1 = [
    { val: 'Café da manhã', isChecked: true },
  ];

  public form2 = [
    { val2: 'Abdômem', isChecked: true },
  ];
  constructor() {}

}
