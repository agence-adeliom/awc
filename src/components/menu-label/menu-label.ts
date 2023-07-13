import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './menu-label.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://awc.a-dev.cloud/components/menu-label
 * @status stable
 * @since 2.0
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('awc-menu-label')
export default class AWCMenuLabel extends AWCElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-menu-label': AWCMenuLabel;
  }
}
