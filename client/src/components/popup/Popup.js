import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions, hasContentSelector } from './reducer';
import { POPUP_TYPE, MSG_TYPE } from './constant';
import './popup.css';

const confirm = (popup, onCloseHndr) => {
  return (
    <Fragment>
      <strong>confirm</strong>

      <div className="box_msg">
        {popup.msgs.map((m, i) => (
          <p key={m + i}>{m}</p>
        ))}
      </div>
      <div className="wrap_btn">
        <button
          type="button"
          className="btn"
          onClick={() => onCloseHndr(popup)}
        >
          No
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => onCloseHndr(popup)}
        >
          Yes
        </button>
      </div>
    </Fragment>
  );
};
const alert = (popup, onCloseHndr) => (
  <Fragment>
    <div className="box_msg">
      {popup.msgs.map((m, i) => (
        <p key={m + i}>{m}</p>
      ))}
    </div>
    <div className="wrap_btn">
      <button type="button" className="btn" onClick={() => onCloseHndr(popup)}>
        close
      </button>
    </div>
  </Fragment>
);

export default function Popup() {
  const dispatch = useDispatch();
  const popupList = useSelector((state) => state.popup);
  const hasContent = useSelector(hasContentSelector);

  const onCloseHndr = (p) => dispatch(popupActions.remove(p.id));

  useEffect(() => {
    dispatch(popupActions.create(POPUP_TYPE.ALERT, MSG_TYPE.UNKNOWN_ERROR));
    dispatch(popupActions.create(POPUP_TYPE.CONFIRM, MSG_TYPE.LOG_OUT));
    dispatch(popupActions.create());
  }, [dispatch]);

  useEffect(() => {
    const DISABLE_SCROLL_CALSS = 'open_popup';
    hasContent
      ? document.body.classList.add(DISABLE_SCROLL_CALSS)
      : document.body.classList.remove(DISABLE_SCROLL_CALSS);
  }, [hasContent]);

  if (!hasContent) return null;

  return hasContent ? (
    <div className="wrap_popup">
      {popupList
        .filter((p, idx) => idx === 0)
        .map((p) => (
          <div className="popup" key={p.id}>
            {p.type === POPUP_TYPE.CONFIRM && confirm(p, onCloseHndr)}
            {p.type === POPUP_TYPE.ALERT && alert(p, onCloseHndr)}
          </div>
        ))}
    </div>
  ) : null;
}
