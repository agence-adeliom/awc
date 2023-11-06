import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import AWCIconButton from '../icon-button/icon-button.component.js';
import styles from './tab.styles.js';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Tabs are used inside [tab groups](?path=/docs/components-tab-group--docs) to represent and activate [tab panels](?path=/docs/components-tab-panel--docs).
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-tab-tab--docs
 * @status stable
 * @since 1.0
 *
 * @dependency awc-icon-button
 *
 * @slot - The tab's label.
 *
 * @event awc-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an `<awc-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 */
export default class AWCTab extends AWCElement {
  static styles: CSSResultGroup = styles;
  static dependencies = { 'awc-icon-button': AWCIconButton };

  private readonly localize = new LocalizeController(this);

  private readonly attrId = ++id;
  private readonly componentId = `awc-tab-${this.attrId}`;

  @query('.tab') tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close button. */
  @property({ type: Boolean }) closable = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  private handleCloseClick(event: Event) {
    event.stopPropagation();
    this.emit('awc-close');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          tab: true,
          'tab--active': this.active,
          'tab--closable': this.closable,
          'tab--disabled': this.disabled
        })}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot></slot>
        ${this.closable
          ? html`
              <awc-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term('close')}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></awc-icon-button>
            `
          : ''}
      </div>
    `;
  }
}