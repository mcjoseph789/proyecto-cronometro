import { Component, Input } from '@angular/core'

type ElementStyle = { [prop: string]: any }

@Component({
  selector: 'app-colon',
  templateUrl: './colon.component.html',
  styleUrls: ['./colon.component.css'],
})
export class ColonComponent {
  @Input() width: number = 64
  @Input() height: number = 8

  get colonStyle(): ElementStyle {
    return {
      'height': `${2 * this.width + 3 * this.height}px`,
    }
  }

  get shapeStyle(): ElementStyle {
    return {
      'width': `${1.5 * this.height}px`,
      'height': `${1.5 * this.height}px`,
    }
  }
}
