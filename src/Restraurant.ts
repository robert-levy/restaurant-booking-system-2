interface ITableRequest {
  totalPersons: number;
  personsWithDisability?: number;
}

interface IBarSeat {
  barSeatNumber: number;
  availability: boolean;
}

interface IRestaurantTable {
  tableNumber: number;
  seats: number;
  availability: boolean;
}

interface IErrorNotFound {
  errorMsg: string;
}

type BookTableType = IRestaurantTable | IBarSeat | IErrorNotFound;
type BookBarSeatType = IBarSeat | IErrorNotFound;

export default class Restaurant {
  private _branch!: string; // Definite Assignment Assertions: assert that this variable will be assigned
  private tables: IRestaurantTable[];
  private bar: IBarSeat[];

  constructor(branch = "", tables: IRestaurantTable[], bar: IBarSeat[]) {
    this._branch = branch
    this.tables = tables
    this.bar = bar
    console.log('Initialized branch: '+this.branch)
    console.log(this.tables)
    console.log(this.bar)
  }

  set branch(branch: string){
    this._branch = branch
  }

  get branch(){
    return this._branch
  }

  bookTable({
    totalPersons,
    personsWithDisability = 0,
  }: ITableRequest): BookTableType {
    // step 1: check how many seats are required. People with disabilities need two seats worth of space. Singles should use the bar.
    const seatsRequired =
      personsWithDisability === 0
        ? totalPersons
        : totalPersons + personsWithDisability;

    // if request is a single person with no disability, find bar seat instead
    if (totalPersons === 1 && !personsWithDisability) {
      const barSeat = this.bookBarSeat();
      console.log(
        `global bar state after booking a single person: ${JSON.stringify(
          this.bar
        )}`
      );
      return barSeat;
    }

    // step 2: search our state to find the next available table with the required number of seats, and return i
    const availableTable = this.tables.find(
      (table) => table.availability && table.seats >= seatsRequired
    );

    if (availableTable) {
      // set the table object within our state to have availability: false. Atm this effects both global state obj and retured obj
      availableTable.availability = false;

      console.log(
        `Global state after found table: ${JSON.stringify(this.tables)}`
      );
      console.log(
        `return table object once found table : ${JSON.stringify(availableTable)}`
      );

      return availableTable;
    }

    // otherwise no table found
    return {
      errorMsg: "No spaces available for required spaces right now",
    };
  }

  bookBarSeat(): BookBarSeatType {
    // look through RestaurantBarState, find free barSeat and return, else return error
    const barSeat = this.bar.find((barSeat) => barSeat.availability);
    if (barSeat) {
      barSeat.availability = false;

      console.log(
        `Global state after found bar seat: ${JSON.stringify(this.bar)}`
      );
      console.log(
        `return barSeat object once found bar seat : ${JSON.stringify(barSeat)}`
      );
      return barSeat;
    }
    return {
      errorMsg: "No spaces available for required spaces right now",
    };
  }

  makeTableAvailable(availableTable: IRestaurantTable): void {
    let foundTable = this.tables.find(table => JSON.stringify(table) === JSON.stringify(availableTable))
    if(foundTable){
      foundTable.availability = true
    }
    console.log(`global state after table:${foundTable?.tableNumber} made available again`, this.tables)
  
  }

  makeBarSeatAvailable(availableBarSeat: IBarSeat) {
    let foundBarSeat = this.bar.find(barSeat => JSON.stringify(barSeat) === JSON.stringify(availableBarSeat))
    if(foundBarSeat){
      foundBarSeat.availability = true
    }
    console.log(`global state after bar seat:${foundBarSeat?.barSeatNumber} made available again`, this.bar)
  
  }
}
