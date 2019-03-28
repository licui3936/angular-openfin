
/// <reference types="openfin" />
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular openfin test';
  version: string;

  private mainWin: fin.OpenFinWindow;

  constructor() {
    this.init();
  }

  init() {
    try {
      fin.desktop.main(() => this.initWithOpenFin());

    } catch (err) {
      this.initNoOpenFin();
    }
  }

  initWithOpenFin() {
    this.mainWin = fin.desktop.Window.getCurrent();
    /* this.mainWin = new fin.desktop.Window(
      {
          name: 'openFinWindow',
          url: 'http://openfin.co',
          defaultWidth: 600,
          defaultHeight: 400
      },
      () => {
          this.mainWin.show();
      },
      (error) => {
          console.log('Error creating window:', error);
      }
    );*/

    fin.desktop.System.getVersion((version) => {
      try {
        this.version = 'OpenFin version ' + version;
        console.log('version:' + version);
      } catch (err) {
        alert('error: ' + err);
      }
    });

  }

  initNoOpenFin() {
    alert('OpenFin is not available - you are probably running in a browser.');
  }
}
