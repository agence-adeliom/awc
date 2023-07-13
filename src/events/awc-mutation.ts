type AWCMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-mutation': AWCMutationEvent;
  }
}

export default AWCMutationEvent;
