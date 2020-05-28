import { createSlice, createSelector } from '@reduxjs/toolkit';
import { POPUP_TYPE, MSG_TYPE } from './constant';
// 추상화, 인터페이스
let popupId = 0;
const popup = createSlice({
  name: 'popup',
  initialState: [],
  reducers: {
    create: {
      reducer: (popups, { payload: { type, msgs } }) =>
        popups.concat({ id: `popup-${++popupId}`, type, msgs }),
      prepare: (type, msgs) => ({
        payload: {
          type: type || POPUP_TYPE.ALERT,
          msgs: msgs || MSG_TYPE.NO_MSG
        }
      })
    },
    remove: {
      reducer: (popups, { payload }) => popups.filter((p) => p.id !== payload),
      prepare: (id) => ({ payload: id || 0 })
    }
  }
});
/**
 * computed selectors
 */
export const hasContentSelector = createSelector(
  (state) => state.popup,
  (popups) => popups.length > 0
);
/**
 * exportation
 */
export const popupActions = popup.actions;
export const popupReducer = popup.reducer;



