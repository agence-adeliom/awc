type AWCTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-tab-hide': AWCTabHideEvent;
  }
}

export default AWCTabHideEvent;
