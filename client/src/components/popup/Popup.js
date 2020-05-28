import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions, hasContentSelector } from './reducer';
import { POPUP_TYPE, MSG_TYPE, DISABLE_SCROLL_CALSS } from './constant';
import { confirm, alert } from './ui';
import './popup.css';

export default function Popup() {
  const dispatch = useDispatch();
  const popups = useSelector((state) => state.popup);
  const hasContent = useSelector(hasContentSelector);

  const onCloseHndr = (popup) => dispatch(popupActions.remove(popup.id));

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

  if (!hasContent) return null;

  return hasContent ? (
    <div className="wrap_popup">
      {popups
        .filter((popup, idx) => idx === 0)
        .map((popup) => (
          <div className="popup" key={popup.id}>
            {popup.type === POPUP_TYPE.CONFIRM && confirm(popup, onCloseHndr)}
            {popup.type === POPUP_TYPE.ALERT && alert(popup, onCloseHndr)}
          </div>
        ))}
    </div>
  ) : null;
}
