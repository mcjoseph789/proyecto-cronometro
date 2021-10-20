import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyect005'
  mensaje = '15'
  actualizar(t: Event) {
    this.mensaje = `${t} (se actualiza cada 10 segundos)`
  }
}
