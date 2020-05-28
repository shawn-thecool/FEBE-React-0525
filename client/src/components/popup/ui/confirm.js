import React, { Fragment } from 'react';

export default function confirm(popup, onCloseHndr) {
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
