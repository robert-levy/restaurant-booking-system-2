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
  successMessage?: string //same for success messages
}

export interface ErrorResponse {
  errorMessage: string;
}

export enum ModalType {
  Success = "success",
  Error = "error"
}

export type ICardType = "tables" | "bar";

export interface IchangeSeatingStatus {
  spaceNumber: number;
  newStatus: Availability;
}

export interface IRestaurant {
  makeBooking(state: State, request: IBookingRequest): State | ErrorResponse;
  bookBarSeat(state: State):State | ErrorResponse;
  bookTable(state: State, seatsRequired: number): State | ErrorResponse;
  changeSeatingStatus(
    seatingState: IRestaurantTable[] | IBarSeat[],
    payload: IchangeSeatingStatus
  ): IRestaurantTable[] | IBarSeat[];
  makeBarSeatAvailable(bar: IBarSeat[], barSeatNumber: number): IBarSeat[];
  totalTableSeats(tables: IRestaurantTable[]): Number;
}
