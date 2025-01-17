import { css } from 'lit';

export default css`
  :host {
    --symbol-color: var(--awc-color-neutral-300);
    --symbol-color-active: var(--awc-color-warning-400);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--awc-spacing-3xsmall);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--awc-border-radius-medium);
    vertical-align: middle;
    align-items: center;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--awc-transition-fast) scale;
  }

  .rating__rate {
    font-size: calc(var(--symbol-size) * 0.75);
    margin-left: 0.5rem;
    line-height: 0;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;
