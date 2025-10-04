// Solid Web Polyfill – No-op implementations for build compatibility
// Allows bundling Solid code in non-DOM environments

// --- DOM Utilities ---
export function setStyleProperty(el: HTMLElement, prop: string, value: string) {
  if (el?.style) el.style.setProperty(prop, value);
}
export function setAttribute(el: HTMLElement, name: string, value: string) {
  if (el?.setAttribute) el.setAttribute(name, value);
}
export function getAttribute(el: HTMLElement, name: string) {
  return el?.getAttribute?.(name) ?? null;
}
export function removeAttribute(el: HTMLElement, name: string) {
  el?.removeAttribute?.(name);
}

// --- Solid Runtime Helpers (no-op or safe mocks) ---
export const effect = (..._args: any[]) => {};
export const use = (..._args: any[]) => {};
export const template = (..._args: any[]) => document.createElement("div");
export const delegateEvents = (..._args: any[]) => {};
export const insert = (..._args: any[]) => {};
export const createComponent = (_Comp: any, _props: any) => null;
export const Portal = (_props: any) => null;
export const memo = (fn: any) => fn;
export const className = (_el: any, _value: any) => {};
export const addEventListener = (..._args: any[]) => {};
export const mergeProps = (..._args: any[]) => Object.assign({}, ..._args);
export const style = (_el: any, _styles: any) => {};
export const spread = (_el: any, _props: any) => {};
export const createTextNode = (value: string) => document.createTextNode(value);
export const dynamicProperty = (_obj: any, _prop: any, _value: any) => {};
export const classList = (_el: any, _list: any) => {};
export const insertNode = (_parent: any, _node: any, _anchor?: any) => {};
export const runHydrationEvents = () => {};
export const render = (_Comp: any, _el: any) => null;
export const hydrate = (_Comp: any, _el: any) => null;
export const ssr = (..._args: any[]) => "";
export const ssrHydrationKey = () => "";
export const ssrClassList = () => "";
export const effectQueue = [];

// --- Signals (optional Solid-core compatibility) ---
export const createSignal = <T>(v: T) => [() => v, (_: T) => {}];
export const createEffect = (_fn: () => void) => {};
export const onMount = (_fn: () => void) => {};
export const onCleanup = (_fn: () => void) => {};
export const createMemo = <T>(fn: () => T) => fn();

// --- New Missing Exports ---
export const isServer = false; // assume client-side only
export const Dynamic = (_props: any) => null; // placeholder component
export const getOwner = () => null; // mock for runtime context

// --- Default Export (interop) ---
export default {
  effect,
  use,
  template,
  delegateEvents,
  insert,
  createComponent,
  Portal,
  memo,
  className,
  addEventListener,
  mergeProps,
  style,
  spread,
  isServer,
  Dynamic,
  getOwner,
};
