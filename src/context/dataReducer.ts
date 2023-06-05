import Restaurant from "../Restaurant";
import { State } from "../interfaces/interfaces";
import { Action, ActionTypes } from "./dataActions";

const reducer = (state: State, action: Action): State => {
  let restaurant = new Restaurant();
  // let updatedState: Partial<State> = {}; or ErrorResponse
  let updatedState: any;

  switch (action.type) {
    case ActionTypes.CREATE_RESTAURANT:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.MAKE_BOOKING:
      updatedState = restaurant.makeBooking(state, action.payload);
      console.log(updatedState);
      if ("errorMessage" in updatedState) {
        console.log("inside");
        const { errorMessage } = updatedState;
        return {
          ...state,
          errorMessage,
        };
      }

      return { ...updatedState };

    case ActionTypes.MAKE_TABLE_AVAILABLE:
      updatedState = restaurant.makeTableAvailable(
        state.tables,
        action.payload
      );
      return {
        ...state,
        tables: updatedState, // as IRestaurantTable[], // Type assertion to State['tables']
      };

    case ActionTypes.ACKNOWLEDGE_ERROR:
      updatedState = { ...state };
      delete updatedState.errorMessage;
      return {
        ...updatedState,
      };
    default:
      return state;
  }
};
export default reducer;
