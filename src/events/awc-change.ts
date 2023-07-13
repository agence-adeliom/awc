type AWCChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-change': AWCChangeEvent;
  }
}

export default AWCChangeEvent;
