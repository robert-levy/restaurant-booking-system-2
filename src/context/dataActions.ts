import { State, IBookingRequest, ICardType, Availability } from "../interfaces/interfaces";

export const initialState: State = {
  bar: [],
  tables: [],
};

export enum ActionTypes {
  CREATE_RESTAURANT = "CREATE_RESTAURANT",
  MAKE_BOOKING = "MAKE_BOOKING",
  CHANGE_SEATING_STATUS = "CHANGE_SEATING_STATUS",
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

interface changeSeatingStatusAction {
  type: ActionTypes.CHANGE_SEATING_STATUS;
  payload: {
    spaceNumber: number,
    type: ICardType,
    newStatus:Availability
  };
}

interface AcknowledgeErrorAction {
  type: ActionTypes.ACKNOWLEDGE_ERROR;
}

export type Action =
  | CreateRestaurantAction
  | MakeBookingAction
  | changeSeatingStatusAction
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

export const changeSeatingStatus = (
  spaceNumber: number,
  type: ICardType,
  newStatus: Availability
): changeSeatingStatusAction => ({
  type: ActionTypes.CHANGE_SEATING_STATUS,
  payload: {spaceNumber, type, newStatus},
});

export const acknowledgeError = (): AcknowledgeErrorAction => ({
  type: ActionTypes.ACKNOWLEDGE_ERROR
})
