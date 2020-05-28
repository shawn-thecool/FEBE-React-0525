import { createSlice, createSelector } from '@reduxjs/toolkit';
import { POPUP_TYPE, MSG_TYPE } from './constant';
/**
 * popupId popup-{++id}
 */
let popupId = 0;
/**
 * slice
 */
const popups = createSlice({
  name: 'popup',
  initialState: [],
  reducers: {
    create: {
      reducer: (state, { payload: { type, msgs } }) =>
        state.concat({ id: `popup-${++popupId}`, type, msgs }),
      prepare: (type, msgs) => ({
        payload: {
          type: type || POPUP_TYPE.ALERT,
          msgs: msgs || MSG_TYPE.NO_MSG
        }
      })
    },
    remove: {
      reducer: (state, { payload }) => state.filter((p) => p.id !== payload),
      prepare: (id) => ({ payload: id || 0 })
    }
  }
});
/**
 * computed selectors (re-selectors)
 */
export const hasContentSelector = createSelector(
  (state) => state.popup,
  (popups) => popups.length > 0
);
export const currentPopupSelector = createSelector(
  (state) => state.popup,
  (popups) => popups.find((item, idx) => idx === 0)
);
/**
 * action tpyes
 */
export const popupActions = popups.actions;
/**
 * reducer
 */
export const popupReducer = popups.reducer;
