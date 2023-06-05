import { State, IBookingRequest } from "../interfaces/interfaces";

export const initialState: State = {
  bar: [],
  tables: [],
};

export enum ActionTypes {
  CREATE_RESTAURANT = "CREATE_RESTAURANT",
  MAKE_BOOKING = "MAKE_BOOKING",
  MAKE_TABLE_AVAILABLE = "MAKE_TABLE_AVAILABLE",
  ACKNOWLEDGE_ERROR = "ACKNOWLEDGE_ERROR",
}

interface CreateRestaurantAction {
  type: ActionTypes.CREATE_RESTAURANT;
  payload: State;
}

interface MakeBookingAction {
  type: ActionTypes.MAKE_BOOKING;
  payload: IBookingRequest;
}

interface MakeTableAvailableAction {
  type: ActionTypes.MAKE_TABLE_AVAILABLE;
  payload: number;
}

interface AcknowledgeErrorAction {
  type: ActionTypes.ACKNOWLEDGE_ERROR;
}

export type Action =
  | CreateRestaurantAction
  | MakeBookingAction
  | MakeTableAvailableAction
  | AcknowledgeErrorAction;

/// Actions
export const createRestaurant = (initState: State): CreateRestaurantAction => ({
  type: ActionTypes.CREATE_RESTAURANT,
  payload: initState,
});

export const makeBooking = (
  totalPersons: number,
  personsWithDisability: number
): MakeBookingAction => ({
  type: ActionTypes.MAKE_BOOKING,
  payload: {
    totalPersons,
    personsWithDisability,
  },
});

export const makeTableAvailable = (
  tableNumber: number
): MakeTableAvailableAction => ({
  type: ActionTypes.MAKE_TABLE_AVAILABLE,
  payload: tableNumber,
});

export const acknowledgeError = (): AcknowledgeErrorAction => ({
  type: ActionTypes.ACKNOWLEDGE_ERROR
})
