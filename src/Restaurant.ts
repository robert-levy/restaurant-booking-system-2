import {
  State,
  IBookingRequest,
  IBarSeat,
  IRestaurantTable,
  ErrorResponse,
  Availability,
} from "./interfaces/interfaces";

interface IchangeSeatingStatus {
  spaceNumber: number;
  newStatus: Availability;
}

export interface IRestaurant {
  makeBooking(state: State, request: IBookingRequest): State | ErrorResponse;
  bookBarSeat(state: IBarSeat[]): IBarSeat[] | ErrorResponse;
  bookTable(
    tables: IRestaurantTable[],
    seatsRequired: number
  ): IRestaurantTable[] | ErrorResponse;
  changeSeatingStatus<SeatingArray extends IRestaurantTable[] | IBarSeat[]>(
    seatingState: SeatingArray,
    payload: IchangeSeatingStatus
  ): SeatingArray;
  makeBarSeatAvailable(bar: IBarSeat[], barSeatNumber: number): IBarSeat[];
  totalTableSeats(tables: IRestaurantTable[]): Number;
}

export default class Restaurant implements IRestaurant {
  makeBooking(
    state: State,
    { totalPersons, personsWithDisability = 0 }: IBookingRequest
  ): State | ErrorResponse {
    const seatsRequired =
      personsWithDisability === 0
        ? totalPersons
        : totalPersons + personsWithDisability;

    if (seatsRequired === 1) {
      //TODO: I DONT NEED TO CHECK THIS. COULD JUST INCLUDE SEARCH WITH THE TABLES + BAR SEATS
      // Try book bar seat for single person
      const updatedBarState = this.bookBarSeat(state.bar);

      if (isErrorResponse(updatedBarState)) {
        const { errorMessage } = updatedBarState;
        return { errorMessage };
      }
      return { ...state, bar: updatedBarState };
    }
    // Book table
    const updatedTablesState = this.bookTable(state.tables, seatsRequired);

    if (isErrorResponse(updatedTablesState)) {
      const { errorMessage } = updatedTablesState;
      return { errorMessage };
    }

    return { ...state, tables: updatedTablesState, successMessage:"Successfull booking" };
  }

  bookTable(
    tablesState: IRestaurantTable[],
    seatsRequired: number
  ): IRestaurantTable[] | ErrorResponse {
    const updatedTablesState = [...tablesState];

    // check not all tables are taken
    if (this.isTablesFullyBooked(updatedTablesState)) {
      return { errorMessage: "All tables fully booked" };
    }

    // (tables should be sorted in order of number of seats, so first response will be the viable
    // table with the smallest amount of seats for the group)
    const availableTable = updatedTablesState.find(
      (table) =>
        table.availability === "available" && table.seats >= seatsRequired
    );

    if (availableTable) {
      availableTable.availability = Availability.Unavailable;
      console.log(updatedTablesState);
      
      return updatedTablesState;
    }

    // If seatsRequired < total number of seats left , offer bar seats (for now just error not enough tables for booking)
    if (seatsRequired > this.totalTableSeats(updatedTablesState)) {
      return { errorMessage: "Not enough tables to fulfill booking" };
    }

    // No one table large enough available, either merge tables or offer wait time
    return({errorMessage: "No single table can fulfill booking. Either use multiple tables with custom booking or offer waiting time til next available table"})
  }

  bookBarSeat(barState: IBarSeat[]): IBarSeat[] | ErrorResponse {
    const updatedBarState = [...barState];
    const seatToChange = updatedBarState.find(
      (barSeat) => barSeat.availability === "available"
    );

    if (seatToChange) {
      seatToChange.availability = Availability.Unavailable;
      return updatedBarState;
    }
    // No barSeat available
    return { errorMessage: "No bar seats available" };
  }

  changeSeatingStatus<SeatingArray extends IRestaurantTable[] | IBarSeat[]>(
    seatingState: SeatingArray,
    { spaceNumber, newStatus }: IchangeSeatingStatus
  ): SeatingArray {
    const updatedSeatingState = [...seatingState] as SeatingArray;
    //@ts-ignore
    let foundSeating = updatedSeatingState.find(
      (space: IRestaurantTable | IBarSeat) => {
        // this conditional runs for every table or seat in the array
        if (isRestaurantTable(space)) {
          return space.tableNumber === spaceNumber;
        } else {
          // must be barSeat
          return space.barSeatNumber === spaceNumber;
        }
      }
    );

    if (foundSeating) {
      foundSeating.availability = newStatus; // change to it takes parameter 'available','reserved', 'out-of-order'
    }
    return updatedSeatingState;
  }

  makeBarSeatAvailable(bar: IBarSeat[], barSeatNumber: number): IBarSeat[] {
    const updatedBarState = [...bar];
    let foundBarSeat = updatedBarState.find(
      (barSeat) => barSeat.barSeatNumber === barSeatNumber
    );
    if (foundBarSeat) {
      foundBarSeat.availability = Availability.Available;
    }
    return updatedBarState;
  }

  isTablesFullyBooked(tables: IRestaurantTable[]): Boolean {
    return tables.every((table) => table.availability !== "available");
  }

  totalTableSeats = (tables: IRestaurantTable[]): number =>
    tables.reduce(
      (totalSeats, table) =>
        table.availability === "available"
          ? totalSeats + table.seats
          : totalSeats,
      0
    );
}
function isErrorResponse(value: any): value is ErrorResponse {
  return value && typeof value.errorMessage === "string";
}

// generalize this to be checkSeatingType()
function isRestaurantTable(
  space: IBarSeat | IRestaurantTable
): space is IRestaurantTable {
  return (space as IRestaurantTable).tableNumber !== undefined;
}
