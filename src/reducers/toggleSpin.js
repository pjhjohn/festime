import { TOGGLE_SPIN } from './../actions/toggleSpin';

const INITIAL_SPIN_STATE = { cw: true };

export default function (state = INITIAL_SPIN_STATE, action) {
  switch(action.type) {
    case TOGGLE_SPIN:
      return { ...state, cw: !state.cw };
    default:
      return state;
  }
}
