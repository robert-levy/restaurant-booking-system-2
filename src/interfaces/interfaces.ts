export enum Availability {
  Available = "available",
  Unavailable = "unavailable",
  OutOfOrder = "out-of-order",
  Reserved = "reserved"
}

export interface IBarSeat {
  barSeatNumber: number;
  availability: Availability;
}

export interface IRestaurantTable {
  tableNumber: number;
  seats: number;
  availability: Availability;
}

export interface IBookingRequest {
  totalPersons: number;
  personsWithDisability?: number;
}

export interface State {
  bar: IBarSeat[] | [];
  tables: IRestaurantTable[] | [];
  errorMessage?: string; // can narrow this down to list of errors
}

export interface ErrorResponse {
  errorMessage: string;
}

export type ICardType = "tables" | "bar";
