import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
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
