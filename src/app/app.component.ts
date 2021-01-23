import { isDefined } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Servers is declared but not is defined. Added [] to define servers.
  servers = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    // Previous code was not deleting the selected id.
    // const position = id + 1;
    const position = id;
    this.servers.splice(position, 1);
  }
}
