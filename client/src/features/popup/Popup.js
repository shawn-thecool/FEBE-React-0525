import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions, hasContentSelector } from './reducer';
import { POPUP_TYPE, MSG_TYPE } from './constant';
import './popup.css';

function confirm(popup, onCloseHndr) {
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
}
const alert = (popup) => popup.msgs.map((m, i) => <p key={m + i}>A:{m}</p>);

export default function Popup() {
  const dispatch = useDispatch();
  const popupList = useSelector(({ popup }) => popup);
  const hasContent = useSelector(hasContentSelector)

  const onCloseHndr = (p) => dispatch(popupActions.remove(p.id));

  useEffect(() => {
    dispatch(popupActions.create(POPUP_TYPE.ALERT, MSG_TYPE.UNKNOWN_ERROR));
    dispatch(popupActions.create(POPUP_TYPE.CONFIRM, MSG_TYPE.LOG_OUT));
    dispatch(popupActions.create());
  }, [dispatch]);

  console.log('hasContent', hasContent);

  return (
    <div className="wrap_popup">
      {popupList.map((p) => (
        <div className="popup" key={p.id}>
          {p.type === POPUP_TYPE.CONFIRM && confirm(p, onCloseHndr)}
          {p.type === POPUP_TYPE.ALERT && alert(p)}
        </div>
      ))}
      <div className="popup_dimmed"></div>
    </div>
  );
}
