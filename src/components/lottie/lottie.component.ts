import { bound } from '../../internal/bound.js';
import {
  fromURL,
  isLottie,
  LOTTIE_PLAYER_VERSION,
  LOTTIE_WEB_VERSION,
  parseSrc,
  PlayerEvents,
  PlayerState,
  PlayMode
} from './utils.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import AWCElement from '../../internal/awc-element.js';
import lottie from 'lottie-web';
import styles from './lottie.styles.js';
import type { AnimationConfigWithData, AnimationConfigWithPath, AnimationDirection, AnimationItem } from 'lottie-web';
import type { CSSResultGroup, TemplateResult } from 'lit';
import type { Utils } from './utils.js';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-lottie--docs
 * @status experimental
 * @since 1.0
 */
export default class AWCLottie extends AWCElement {
  static styles: CSSResultGroup = styles;

  /**
   * Autoplay animation on load.
   */
  @property({ type: Boolean }) autoplay: boolean = false;

  /**
   * Background color.
   */
  @property({ type: String, reflect: true }) background: string = 'transparent';

  /**
   * Show controls.
   */
  @property({ type: Boolean }) controls: boolean = false;

  /**
   * Number of times to loop animation.
   */
  @property({ type: Number }) count: number;

  /**
   * Player state.
   */
  @property({ type: String }) currentState: PlayerState = PlayerState.Loading;

  /**
   * Animation description for screen readers.
   */
  @property({ type: String }) description: string = 'Lottie animation';

  /**
   * Direction of animation.
   */
  @property({ type: Number }) direction: AnimationDirection = 1;

  /**
   * Disable checking if the Lottie is valid before loading
   */
  @property({ type: Boolean }) disableCheck?: boolean = false;

  /**
   * Disable using shadow dom as the root
   */
  @property({ type: Boolean }) disableShadowDOM: boolean = false;

  /**
   * Whether to play on mouse hover
   */
  @property({ type: Boolean }) hover: boolean = false;

  /**
   * Intermission
   */
  @property() intermission: number = 1;

  /**
   * Whether to loop animation.
   */
  @property({ type: Boolean, reflect: true }) loop: boolean = false;

  /**
   * Play mode.
   */
  @property() mode: PlayMode = PlayMode.Normal;

  /**
   * Aspect ratio to pass to lottie-web.
   */
  @property({ type: String }) preserveAspectRatio: string = 'xMidYMid meet';

  /**
   * Renderer to use.
   */
  @property({ type: String }) renderer = 'svg' as const;

  /**
   * Viewbox size for renderer settings
   */
  @property({ type: String }) viewBoxSize?: string;

  /**
   * seeker
   */
  @property({ type: Number }) seeker: number;

  /**
   * Animation speed.
   */
  @property({ type: Number }) speed: number = 1;

  /**
   * Bodymovin JSON data or URL to JSON.
   */
  @property({ type: String }) src?: string;

  /**
   * Enable web workers
   */
  @property({ type: Boolean }) webworkers?: boolean;

  /**
   * Animation container.
   */
  @query('.animation') container!: HTMLElement;

  private _io: IntersectionObserver | undefined = undefined;

  private _lottie?: AnimationItem;

  private _prevState?: PlayerState;

  private _counter: number = 1;

  /**
   * Configure and initialize lottie-web player instance.
   */
  private async load(src: string | object) {
    const options: AnimationConfigWithPath<'svg'> | AnimationConfigWithData<'svg'> = {
      container: this.container,
      loop: false,
      autoplay: false,
      renderer: this.renderer,
      rendererSettings: {
        preserveAspectRatio: this.preserveAspectRatio,
        progressiveLoad: true,
        hideOnTransparent: true,
        ...(this.viewBoxSize && { viewBoxSize: this.viewBoxSize })
      }
    };

    // Load the resource information
    try {
      const srcParsed = parseSrc(src);
      let jsonData = {};
      let srcAttrib = typeof srcParsed === 'string' ? 'path' : 'animationData';

      // Clear previous animation, if any
      if (this._lottie) {
        this._lottie.destroy();
      }

      if (this.webworkers) {
        //lottie.useWebWorker(true);
      }

      // Initialize lottie player and load animation
      this._lottie = lottie.loadAnimation({
        ...options,
        [srcAttrib]: srcParsed
      });

      // Attach the event listeners before we check the requested json file for errors
      this._attachEventListeners();

      if (!this.disableCheck) {
        // Fetch resource if src is a remote URL
        if (srcAttrib === 'path') {
          jsonData = await fromURL(srcParsed as string);
          srcAttrib = 'animationData';
        } else {
          jsonData = srcParsed;
        }

        if (!isLottie(jsonData)) {
          this.currentState = PlayerState.Error;
          this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
        }
      }
    } catch (err) {
      this.currentState = PlayerState.Error;
      this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
    }
  }

  /**
   * Returns the lottie-web instance used in the component.
   */
  private getLottie(): AnimationItem | undefined {
    return this._lottie;
  }

  /**
   * Returns the lottie-web version and this player's version
   */
  private getVersions(): Utils {
    return {
      lottieWebVersion: LOTTIE_WEB_VERSION,
      lottiePlayerVersion: LOTTIE_PLAYER_VERSION
    };
  }

  /**
   * Start playing animation.
   */
  private play() {
    if (!this._lottie) {
      return;
    }

    this._lottie.play();
    this.currentState = PlayerState.Playing;

    this.dispatchEvent(new CustomEvent(PlayerEvents.Play));
  }

  /**
   * Pause animation play.
   */
  private pause(): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.pause();
    this.currentState = PlayerState.Paused;

    this.dispatchEvent(new CustomEvent(PlayerEvents.Pause));
  }

  /**
   * Stops animation play.
   */
  private stop(): void {
    if (!this._lottie) {
      return;
    }

    this._counter = 1;
    this._lottie.stop();
    this.currentState = PlayerState.Stopped;

    this.dispatchEvent(new CustomEvent(PlayerEvents.Stop));
  }

  /**
   * Destroy animation and lottie-player element.
   */
  private destroy(): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.destroy();
    this._lottie = undefined;
    this.currentState = PlayerState.Destroyed;
    this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed));
    this.remove();
  }

  /**
   * Seek to a given frame.
   */
  private seek(value: number | string): void {
    if (!this._lottie) {
      return;
    }

    // Extract frame number from either number or percentage value
    const matches = /^(\d+)(%?)$/.exec(value.toString());

    if (!matches) {
      return;
    }

    // Calculate and set the frame number
    const frame = matches[2] === '%' ? (this._lottie.totalFrames * Number(matches[1])) / 100 : Number(matches[1]);

    // Set seeker to new frame number
    this.seeker = frame;

    // Send lottie player to the new frame
    if (this.currentState === PlayerState.Playing) {
      this._lottie.goToAndPlay(frame, true);
    } else {
      this._lottie.goToAndStop(frame, true);
      this._lottie.pause();
    }
  }

  /**
   * Snapshot the current frame as SVG.
   *
   * If 'download' argument is boolean true, then a download is triggered in browser.
   */
  private snapshot(download: boolean = true): string | undefined {
    if (!this.shadowRoot) return;

    // Get SVG element and serialize markup
    const svgElement = this.shadowRoot.querySelector('.animation svg') as Node;
    const data = new XMLSerializer().serializeToString(svgElement);

    // Trigger file download
    if (download) {
      const element = document.createElement('a');

      element.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(data)}`;
      element.download = `download_${this.seeker}.svg`;
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    // eslint-disable-next-line consistent-return
    return data;
  }

  /**
   * Sets animation play speed.
   *
   * @param value Playback speed.
   */
  private setSpeed(value = 1): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.setSpeed(value);
  }

  /**
   * Animation play direction.
   *
   * @param value Direction values.
   */
  private setDirection(value: AnimationDirection): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.setDirection(value);
  }

  /**
   * Sets the looping of the animation.
   *
   * @param value Whether to enable looping. Boolean true enables looping.
   */
  private setLooping(value: boolean): void {
    if (this._lottie) {
      this.loop = value;
      this._lottie.loop = value;
    }
  }

  /**
   * Toggle playing state.
   */
  private togglePlay(): void {
    return this.currentState === PlayerState.Playing ? this.pause() : this.play();
  }

  /**
   * Toggles animation looping.
   */
  private toggleLooping(): void {
    this.setLooping(!this.loop);
  }

  /**
   * Resize animation.
   */
  private resize() {
    if (!this._lottie) {
      return;
    }

    this._lottie.resize();
  }

  /**
   * Returns the styles for the component.
   */
  // static get styles() {
  //   return styles;
  // }

  /**
   * Cleanup on component destroy.
   */
  disconnectedCallback(): void {
    // Don't clean up if node is still connected to the context (i.e. this is a move).
    if (this.isConnected) return;

    // Remove intersection observer for detecting component being out-of-view.
    if (this._io) {
      this._io.disconnect();
      this._io = undefined;
    }

    // Remove resize observer for detecting resize/reflow events affecting element.
    // if (this._ro) {
    //   this._ro.disconnect();
    //   this._ro = undefined;
    // }

    // Remove the attached Visibility API's change event listener.
    document.removeEventListener('visibilitychange', this._onVisibilityChange);

    // Destroy the animation instance and element
    this.destroy();
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    if (this.disableShadowDOM) this.style.display = 'block';

    return this.disableShadowDOM ? this : super.createRenderRoot();
  }

  /**
   * Initialize everything on component first render.
   */
  protected firstUpdated(): void {
    // Add intersection observer for detecting component being out-of-view.
    if ('IntersectionObserver' in window) {
      this._io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          if (this.currentState === PlayerState.Frozen) {
            this.play();
          }
        } else if (this.currentState === PlayerState.Playing) {
          this.freeze();
        }
      });

      this._io.observe(this.container);
    }

    // Add listener for Visibility API's change event.
    if (typeof document.hidden !== 'undefined') {
      document.addEventListener('visibilitychange', () => this._onVisibilityChange());
    }

    // Setup lottie player
    if (this.src) {
      this.load(this.src);
    }
    this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered));
  }

  protected renderControls(): TemplateResult {
    const isPlaying: boolean = this.currentState === PlayerState.Playing;
    const isPaused: boolean = this.currentState === PlayerState.Paused;
    const isStopped: boolean = this.currentState === PlayerState.Stopped;

    return html`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        <button
          id="lottie-play-button"
          @click=${this.togglePlay}
          class=${isPlaying || isPaused ? 'active' : ''}
          style="align-items:center;"
          tabindex="0"
          aria-label="play-pause"
        >
          ${isPlaying
            ? html`<svg width="24" height="24" aria-hidden="true" focusable="false">
                <path d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z" />
              </svg>`
            : html`<svg width="24" height="24" aria-hidden="true" focusable="false">
                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />
              </svg>`}
        </button>
        <button
          id="lottie-stop-button"
          @click=${this.stop}
          class=${isStopped ? 'active' : ''}
          style="align-items:center;"
          tabindex="0"
          aria-label="stop"
        >
          <svg width="24" height="24" aria-hidden="true" focusable="false">
            <path d="M6 6h12v12H6V6z" />
          </svg>
        </button>
        <input
          id="lottie-seeker-input"
          class="seeker"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this.seeker}
          @input=${this._handleSeekChange}
          @mousedown=${() => {
            this._prevState = this.currentState;
            this.freeze();
          }}
          @mouseup=${() => {
            if (this._prevState === PlayerState.Playing) {
              this.play();
            }
          }}
          aria-valuemin="1"
          aria-valuemax="100"
          aria-valuenow=${this.seeker}
          tabindex="0"
          aria-label="lottie-seek-input"
        />
        <button
          id="lottie-loop-toggle"
          @click=${this.toggleLooping}
          class=${this.loop ? 'active' : ''}
          style="align-items:center;"
          tabindex="0"
          aria-label="loop-toggle"
        >
          <svg width="24" height="24" aria-hidden="true" focusable="false">
            <path
              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"
            />
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Handle visibility change events.
   */
  @bound
  private _onVisibilityChange(): void {
    if (document.hidden && this.currentState === PlayerState.Playing) {
      this.freeze();
    } else if (this.currentState === PlayerState.Frozen) {
      this.play();
    }
  }

  /**
   * Handles click and drag actions on the progress track.
   */
  @bound
  private _handleSeekChange(event: InputEvent): void {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }

    if (!this._lottie || isNaN(target.valueAsNumber)) {
      return;
    }

    const frame: number = (target.valueAsNumber / 100) * this._lottie.totalFrames;

    this.seek(frame);
  }

  private _attachEventListeners(): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.addEventListener('enterFrame', () => {
      this.seeker = (this._lottie!.currentFrame / this._lottie!.totalFrames) * 100;

      this.dispatchEvent(
        new CustomEvent(PlayerEvents.Frame, {
          detail: {
            frame: this._lottie!.currentFrame,
            seeker: this.seeker
          }
        })
      );
    });

    // Handle animation play complete
    this._lottie.addEventListener('complete', () => {
      if (this.currentState !== PlayerState.Playing) {
        this.dispatchEvent(new CustomEvent(PlayerEvents.Complete));

        return;
      }

      if (!this.loop || (this.count && this._counter >= this.count)) {
        this.dispatchEvent(new CustomEvent(PlayerEvents.Complete));

        if (this.mode === PlayMode.Bounce) {
          if (this._lottie!.currentFrame === 0) {
            return;
          }
        } else {
          return;
        }
      }

      if (this.mode === PlayMode.Bounce) {
        if (this.count) {
          this._counter += 0.5;
        }

        setTimeout(() => {
          this.dispatchEvent(new CustomEvent(PlayerEvents.Loop));

          if (this.currentState === PlayerState.Playing) {
            this._lottie!.setDirection((this._lottie!.playDirection * -1) as AnimationDirection);
            this._lottie!.play();
          }
        }, this.intermission);
      } else {
        if (this.count) {
          this._counter += 1;
        }

        window.setTimeout(() => {
          this.dispatchEvent(new CustomEvent(PlayerEvents.Loop));

          if (this.currentState === PlayerState.Playing) {
            if (this.direction === -1) {
              // Prevents flickering
              this.seek('99%');
              this.play();
            } else {
              this._lottie!.stop();
              this._lottie!.play();
            }
          }
        }, this.intermission);
      }
    });

    // Handle lottie-web ready event
    this._lottie.addEventListener('DOMLoaded', () => {
      // Set initial playback speed and direction
      this.setSpeed(this.speed);
      this.setDirection(this.direction);

      // Start playing if autoplay is enabled
      if (this.autoplay) {
        if (this.direction === -1) this.seek('100%');
        this.play();
      }

      this.dispatchEvent(new CustomEvent(PlayerEvents.Ready));
    });

    // Handle animation data load complete
    this._lottie.addEventListener('data_ready', () => {
      this.dispatchEvent(new CustomEvent(PlayerEvents.Load));
    });

    // Set error state when animation load fail event triggers
    this._lottie.addEventListener('data_failed', () => {
      this.currentState = PlayerState.Error;

      this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
    });

    // Set handlers to auto play animation on hover if enabled
    this.container.addEventListener('mouseenter', () => {
      if (this.hover && this.currentState !== PlayerState.Playing) {
        this.play();
      }
    });
    this.container.addEventListener('mouseleave', () => {
      if (this.hover && this.currentState === PlayerState.Playing) {
        this.stop();
      }
    });
  }

  /**
   * Freeze animation play.
   * This internal state pauses animation and is used to differentiate between
   * user requested pauses and component instigated pauses.
   */
  private freeze(): void {
    if (!this._lottie) {
      return;
    }

    this._lottie.pause();
    this.currentState = PlayerState.Frozen;

    this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze));
  }

  render() {
    const className: string = this.controls ? 'main controls' : 'main';
    const animationClass: string = this.controls ? 'animation controls' : 'animation';

    return html` <div id="animation-container" class=${className} lang="en" aria-label=${this.description} role="img">
      <div id="animation" class=${animationClass} style="background:${this.background};">
        ${this.currentState === PlayerState.Error ? html`<div class="error">⚠️</div>` : undefined}
      </div>
      ${this.controls && !this.disableShadowDOM ? this.renderControls() : undefined}
    </div>`;
  }
}