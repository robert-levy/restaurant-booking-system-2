import Restaurant from "../Restaurant";
import {
  State,
  ErrorResponse,
  IRestaurantTable,
  IBarSeat,
} from "../interfaces/interfaces";
import { Action, ActionTypes } from "./dataActions";

const reducer = (state: State, action: Action): State => {
  let restaurant = new Restaurant();
  let updatedState:
    | State
    | ErrorResponse
    | IRestaurantTable[]
    | IBarSeat[] ;

  switch (action.type) {
    case ActionTypes.CREATE_RESTAURANT:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.MAKE_BOOKING:
      updatedState = restaurant.makeBooking(state, action.payload);
      if ("errorMessage" in updatedState) {
        const { errorMessage } = updatedState;
        return {
          ...state,
          errorMessage,
        };
      }
      return updatedState;

    case ActionTypes.CHANGE_SEATING_STATUS:
      const { type, spaceNumber, newStatus } = action.payload;
      const seatingState = type === "tables" ? state.tables : state.bar;
      updatedState = restaurant.changeSeatingStatus<IRestaurantTable | IBarSeat>(seatingState, {
        spaceNumber,
        newStatus,
      }) as typeof seatingState;
      return {
        ...state,
        [type]: updatedState,
      };

    case ActionTypes.ACKNOWLEDGE_ERROR:
      updatedState = { ...state };
      delete updatedState.errorMessage;
      return updatedState;
    

    case ActionTypes.ACKNOWLEDGE_SUCCESS:
      updatedState = { ...state };
      delete updatedState.successMessage;
      return updatedState;

    default:
      return state;
  }
};
export default reducer;
