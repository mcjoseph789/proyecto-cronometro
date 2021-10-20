import { Component, Input } from '@angular/core'

type ElementStyle = { [prop: string]: any }
type ElementClasses = { [prop: string]: boolean }

@Component({
  selector: 'app-sevenseg',
  templateUrl: './sevenseg.component.html',
  styleUrls: ['./sevenseg.component.css'],
})
export class SevensegComponent {
  private _value: number = 0
  @Input() digits: number = 2
  @Input() pad: boolean = false
  @Input() width: number = 64
  @Input() height: number = 8

  readonly SEGMENTS: number[] = [0, 1, 2, 3, 4, 5, 6]
  readonly DIGIT_TABLE: number[][] = [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
  ]

  get digitsArray(): number[] {
    const arr = new Array(this.digits)
    for (let i = 0; i < this.digits; ++i) {
      arr[i] = i
    }

    return arr
  }

  get maxValue(): number {
    return 10 ** this.digits - 1
  }

  get value(): number {
    return this._value
  }

  @Input()
  set value(v: number) {
    if (Number.isInteger(v)) {
      this._value = ((v % this.maxValue) + this.maxValue + 1) % 100
    } else {
      this._value = 0
    }
  }

  digitStyle(idx: number): ElementStyle {
    const style: ElementStyle = {
      'width': `${this.width}px`,
      'height': `${this.height}px`,
    }

    if (idx > 0) {
      style['margin-left'] = `${this.width * 0.5}px`
    }

    return style
  }

  shapeStyle(idx: number): ElementStyle {
    switch (idx) {
      case 0:
        return {}
      case 1:
        return {
          'transform-origin': 'top right',
          'transform': 'translateY(100%) rotate(270deg)',
        }
      case 2:
        return {
          'top': `${this.width + this.height}px`,
          'transform-origin': 'top right',
          'transform': 'translateY(100%) rotate(270deg)',
        }
      case 3:
        return {
          'top': `${2 * (this.width + this.height)}px`,
        }
      case 4:
        return {
          'top': `${this.width + this.height}px`,
          'transform-origin': 'top left',
          'transform': 'translateY(100%) rotate(90deg)',
        }
      case 5:
        return {
          'transform-origin': 'top left',
          'transform': 'translateY(100%) rotate(90deg)',
        }
      case 6:
        return {
          'top': `${this.width + this.height}px`,
        }
      default:
        return {}
    }
  }

  shapeClass(digit: number, idx: number): ElementClasses {
    const power = 10 ** digit
    const visibleDigit = this.pad || digit === 0 || this._value >= power
    const digitValue = Math.floor(this._value / power) % 10

    return {
      'ss-active': visibleDigit && !!this.DIGIT_TABLE[digitValue][idx],
    }
  }
}
