import {
  State,
  IBookingRequest,
  IBarSeat,
  IRestaurantTable,
  ErrorResponse,
} from "./interfaces/interfaces";

export interface IRestaurant {
  makeBooking(state: State, request: IBookingRequest): State | ErrorResponse;
  bookBarSeat(state: IBarSeat[]): IBarSeat[] | ErrorResponse;
  bookTable(
    tables: IRestaurantTable[],
    seatsRequired: number
  ): IRestaurantTable[] | ErrorResponse;
  makeTableAvailable(
    tables: IRestaurantTable[],
    tableNumber: number
  ): IRestaurantTable[];
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

    if (seatsRequired === 1) {        //TODO: I DONT NEED TO CHECK THIS. COULD JUST INCLUDE SEARCH WITH THE TABLES + BAR SEATS
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

    return { ...state, tables: updatedTablesState };
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

    // find if there is a table that satifies the whole group
    // (tables should be sorted in order of number of seats, so first response will be the viable
    // table with the smallest amount of seats for the group)
    const tableToChange = updatedTablesState.find(
      (table) =>
        table.availability === "available" && table.seats >= seatsRequired
    );

    if (tableToChange) {
      tableToChange.availability = "unavailable";
      return updatedTablesState;
    }

    // If seatsRequired < total number of seats left , offer bar seats (for now just error not enough tables for booking)
    if (seatsRequired > this.totalTableSeats(updatedTablesState)) {
      return { errorMessage: "Not enough tables to fulfill booking" };
    }

    // No table big enough to fit everyone, split them between tables
    // Default behaviour: Find biggest table and assign that, subract seats number from seats Required,
    // call bookTable again to either find a table or just provide the largest and recursive call again
    const initialValue = updatedTablesState.find(
      (table) => table.availability === "available"
    );
    const largestAvailableTable = updatedTablesState.reduce(
      (maxSeatsTable: IRestaurantTable, currentTable) => {
        if (
          (!maxSeatsTable || currentTable.seats > maxSeatsTable.seats) &&
          currentTable.availability === "available"
        ) {
          return currentTable;
        }
        return maxSeatsTable;
      },
      initialValue as IRestaurantTable // type assertion (we check for any undefined above)
    );
    const tableToBook = updatedTablesState.find(
      (table) => table.tableNumber === largestAvailableTable.tableNumber
    ); // book table
    tableToBook!.availability = "unavailable";
    seatsRequired -= largestAvailableTable.seats;
    console.log("new seatsRequired: ", seatsRequired);
    return this.bookTable(updatedTablesState, seatsRequired);
  }

  bookBarSeat(barState: IBarSeat[]): IBarSeat[] | ErrorResponse {
    const updatedBarState = [...barState];
    const seatToChange = updatedBarState.find(
      (barSeat) => barSeat.availability === "available"
    );

    if (seatToChange) {
      seatToChange.availability = "unavailable";
      return updatedBarState;
    }
    // No barSeat available
    return { errorMessage: "No bar seats available" };
  }

  makeTableAvailable(
    tables: IRestaurantTable[],
    tableNumber: number
  ): IRestaurantTable[] {
    const updatedTablesState = [...tables];
    let foundTable = updatedTablesState.find(
      (table) => table.tableNumber === tableNumber
    );
    if (foundTable) {
      foundTable.availability = "available";
    }
    return updatedTablesState;
  }

  makeBarSeatAvailable(bar: IBarSeat[], barSeatNumber: number): IBarSeat[] {
    const updatedBarState = [...bar];
    let foundBarSeat = updatedBarState.find(
      (barSeat) => barSeat.barSeatNumber === barSeatNumber
    );
    if (foundBarSeat) {
      foundBarSeat.availability = "available";
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
