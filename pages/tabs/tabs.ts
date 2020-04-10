import { Component } from '@angular/core';

import { G17Page } from '../g17/g17';
import { G16Page } from '../g16/g16';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = G16Page;
  tab3Root = G17Page;

  constructor() {

  }
}
