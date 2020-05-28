import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_TYPE, MSG_TYPE, DISABLE_SCROLL_CALSS } from './constant';
import pConfirm from './Popup.confirm';
import pAlert from './Popup.alert';
import {
  popupActions,
  hasContentSelector,
  currentPopupSelector
} from './reducer';
import './popup.css';

export default function Popup() {
  const dispatch = useDispatch();
  // selectors
  const hasContent = useSelector(hasContentSelector);
  const currentPopup = useSelector(currentPopupSelector);
  // handlers
  const onCloseHndr = (popup) => dispatch(popupActions.remove(popup.id));
  // hooks
  useEffect(() => {
    dispatch(popupActions.create(POPUP_TYPE.ALERT, MSG_TYPE.UNKNOWN_ERROR));
    dispatch(popupActions.create(POPUP_TYPE.CONFIRM, MSG_TYPE.LOG_OUT));
    dispatch(popupActions.create());
  }, [dispatch]);
  useEffect(() => {
    hasContent
      ? document.body.classList.add(DISABLE_SCROLL_CALSS)
      : document.body.classList.remove(DISABLE_SCROLL_CALSS);
  }, [hasContent]);
  // render
  return hasContent && currentPopup ? (
    <div className="wrap_popup">
      <div className="popup" key={currentPopup.id}>
        {currentPopup.type === POPUP_TYPE.CONFIRM &&
          pConfirm(currentPopup, onCloseHndr)}
        {currentPopup.type === POPUP_TYPE.ALERT &&
          pAlert(currentPopup, onCloseHndr)}
      </div>
    </div>
  ) : null;
}
