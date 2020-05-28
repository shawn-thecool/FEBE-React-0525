import React, { Fragment } from 'react';

export default function alert(popup, onCloseHndr) {
  return (
    <Fragment>
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
          close
        </button>
      </div>
    </Fragment>
  );
}
