import {FASTElement, html, customElement} from '@microsoft/fast-element';
import {ClockController} from './clock-controller.js';
import {FASTReactiveMixin} from "fast-element-reactivity";

const template = html<ClockElement>`
  Current Time: ${x => x.formattedTime()}
`

@customElement({
  name: 'clock-element',
  template,
})
export class ClockElement extends FASTReactiveMixin(FASTElement) {
  // Create the controller and store it
  private clock = new ClockController(this, 100);

  formattedTime (): string {
    return timeFormat.format(this.clock.value)
  }
}

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
});