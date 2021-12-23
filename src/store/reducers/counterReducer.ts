import { AnyAction } from "redux";
interface CountState {
  count: number;
}
const initState: CountState = {
  count: 0,
};
export default function counterReducer(
  state: CountState = initState,
  action: AnyAction
) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
