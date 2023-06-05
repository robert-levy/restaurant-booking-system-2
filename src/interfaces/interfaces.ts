export interface IBarSeat {
    barSeatNumber: number;
    availability: 'available' | 'unavailable' | 'out-of-order';
  }

  export interface IRestaurantTable {
    tableNumber: number;
    seats: number;
    availability: 'available' | 'unavailable' | 'out-of-order';
  }

  export interface IBookingRequest {
    totalPersons: number;
    personsWithDisability?: number;
  }

  export interface State {
    bar: IBarSeat[] | [];
    tables: IRestaurantTable[] | [];
    errorMessage?: string; // can narrow this done to list of errors
  }

  export interface ErrorResponse {
    errorMessage: string;
  }