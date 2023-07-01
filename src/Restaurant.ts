import {
  State,
  IBookingRequest,
  IBarSeat,
  IRestaurantTable,
  ErrorResponse,
  Availability,
  IRestaurant,
  IchangeSeatingStatus
} from "./interfaces/interfaces";
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
      const updatedState = this.bookBarSeat(state);

      if (isErrorResponse(updatedState?.errorMessage)) {
        const { errorMessage } = updatedState;
        return { errorMessage };
      }
      return updatedState;
    }
    // Book table
    const updatedState = this.bookTable(state, seatsRequired);

    if (isErrorResponse(updatedState?.errorMessage)) {
      const { errorMessage } = updatedState;
      return { errorMessage };
    }

    return updatedState;
  }

  bookTable(state: State, seatsRequired: number): State | ErrorResponse {
    const updatedTablesState = [...state.tables];

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

      return {
        ...state,
        tables: updatedTablesState,
        successMessage: `Successfully booked table ${availableTable.tableNumber}`,
      };
    }

    // If seatsRequired < total number of seats left , offer bar seats (for now just error not enough tables for booking)
    if (seatsRequired > this.totalTableSeats(updatedTablesState)) {
      return { errorMessage: "Not enough tables to fulfill booking" };
    }

    return {
      errorMessage:
        "No single table can fulfill booking. Either use multiple tables with custom booking or offer waiting time til next available table",
    };
  }

  bookBarSeat(state: State): State | ErrorResponse {
    const updatedBarState = [...state.bar];
    const seatToChange = updatedBarState.find(
      (barSeat) => barSeat.availability === "available"
    );

    if (seatToChange) {
      seatToChange.availability = Availability.Unavailable;
      return {
        ...state,
        bar: updatedBarState,
        successMessage: `Successfully booked bar seat ${seatToChange.barSeatNumber}`,
      };
    }
    // No barSeat available
    return { errorMessage: "No bar seats available" };
  }

  changeSeatingStatus<SeatingArray extends IRestaurantTable[] | IBarSeat[]>(
    seatingState: SeatingArray,
    { spaceNumber, newStatus }: IchangeSeatingStatus
  ): SeatingArray {
    const updatedSeatingState = [...seatingState] as SeatingArray;
    //@ts-ignore  TODO: Solve typing issue
    let foundSeating = updatedSeatingState.find(
      (space: IRestaurantTable | IBarSeat) => {
        // Todo: this conditional runs for every table or seat in the array. Only need to check once
        if (isRestaurantTable(space)) {
          return space.tableNumber === spaceNumber;
        } else {
          // must be barSeat
          return space.barSeatNumber === spaceNumber;
        }
      }
    );

    if (foundSeating) {
      foundSeating.availability = newStatus;
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

// Todo: generalize this to be checkSeatingType()
function isRestaurantTable(
  space: IBarSeat | IRestaurantTable
): space is IRestaurantTable {
  return (space as IRestaurantTable).tableNumber !== undefined;
}
