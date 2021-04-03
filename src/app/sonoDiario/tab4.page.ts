import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public form1 = [
    { val: 'Sono Diário', isChecked: true },
  ];

  maisDicas: boolean 

  constructor() {}

  dicas() {
    this.maisDicas = !this.maisDicas
  }

}

