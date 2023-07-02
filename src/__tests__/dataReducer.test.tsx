import reducer from "../context/dataReducer";
import { initialState, makeBooking } from "../context/dataActions";
import { createRestaurant } from "../context/dataActions";
import RestaurantTablesJson from "../RestaurantTables.json";
import RestaurantBarJson from "../RestaurantBar.json";
import { defaultState } from "./mocks/mocks";
import { IRestaurantTable, IBarSeat } from "../interfaces/interfaces";

beforeEach(() => {
  reducer(
    initialState,
    createRestaurant({
      tables: RestaurantTablesJson as IRestaurantTable[],
      bar: RestaurantBarJson as IBarSeat[],
    })
  );
});

describe("reducer function", () => {
  test("should return the initial state", () => {
    expect(
      reducer(initialState, createRestaurant({ bar: [], tables: [] }))
    ).toEqual({ bar: [], tables: [] });
  });

  test("should handle bar seat booking", () => {
    const mockedResponse = {
      bar: [
        {
          availability: "unavailable",
          barSeatNumber: 1,
        },
        {
          availability: "available",
          barSeatNumber: 2,
        },
        {
          availability: "available",
          barSeatNumber: 3,
        },
        {
          availability: "available",
          barSeatNumber: 4,
        },
        {
          availability: "available",
          barSeatNumber: 5,
        },
        {
          availability: "available",
          barSeatNumber: 6,
        },
      ],
      successMessage: "Successfully booked bar seat 1",
      tables: [
        {
          availability: "available",
          seats: 2,
          tableNumber: 1,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 2,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 3,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 4,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 5,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 6,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 7,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 8,
        },
        {
          availability: "available",
          seats: 6,
          tableNumber: 9,
        },
      ],
    };
    expect(reducer(defaultState, makeBooking(1, 0))).toEqual(mockedResponse);
  });

  test("should handle table booking for 4", () => {
    const mockedResponse = {
      bar: [
        {
          availability: "unavailable",
          barSeatNumber: 1,
        },
        {
          availability: "available",
          barSeatNumber: 2,
        },
        {
          availability: "available",
          barSeatNumber: 3,
        },
        {
          availability: "available",
          barSeatNumber: 4,
        },
        {
          availability: "available",
          barSeatNumber: 5,
        },
        {
          availability: "available",
          barSeatNumber: 6,
        },
      ],
      successMessage: "Successfully booked table 5",
      tables: [
        {
          availability: "available",
          seats: 2,
          tableNumber: 1,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 2,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 3,
        },
        {
          availability: "available",
          seats: 2,
          tableNumber: 4,
        },
        {
          availability: "unavailable",
          seats: 4,
          tableNumber: 5,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 6,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 7,
        },
        {
          availability: "available",
          seats: 4,
          tableNumber: 8,
        },
        {
          availability: "available",
          seats: 6,
          tableNumber: 9,
        },
      ],
    };
    expect(reducer(defaultState, makeBooking(4, 0))).toEqual(mockedResponse);
  });
});
