import {
  close,
  hideMessage,
  open,
  setHiddenVariables,
  showMessage,
  toggle,
} from "./commands";
import { getBubbleActions, initBubble } from "./embedTypes/chat";
import { initContainer } from "./embedTypes/container";
import { getPopupActions, initPopup } from "./embedTypes/popup";

export {
  close,
  getBubbleActions,
  getPopupActions,
  hideMessage,
  initBubble,
  initContainer,
  initPopup,
  open,
  setHiddenVariables,
  showMessage,
  toggle,
};

const defaultExports = {
  initContainer,
  initPopup,
  initBubble,
  getPopupActions,
  getBubbleActions,
  open,
  close,
  toggle,
  showMessage,
  hideMessage,
  setHiddenVariables,
};

export default defaultExports;

export * from "./types";
