interface ITableRequest {
  totalPersons: number,
  personsWithDisability?: number
}

interface IBarSeat {
  barSeatNumber: number,
  availability: boolean
}

interface IRestaurantTable {
  tableNumber: number,
  seats: number,
  availability: boolean
}

interface IErrorNotFound {
  errorMsg: string
}

type BookTableType = IRestaurantTable | IBarSeat | IErrorNotFound

type BookBarSeatType = IBarSeat | IErrorNotFound

export const initRestaurantTableState = (): IRestaurantTable[] => {
  var RestaurantTablesJson = require('./RestaurantTables.json')
  // let RestaurantTablesState = new Array<IRestaurantTable>(...RestaurantTablesJson) //spead operator won't work, complains im under es5
  let RestaurantTablesState: IRestaurantTable[] = RestaurantTablesJson.map((data: IRestaurantTable) => data)
  return RestaurantTablesState
}

export const initRestaurantBarState = () => {
  var RestaurantBarJson = require('./RestaurantBar.json')
  let RestaurantBarState: IBarSeat[] = RestaurantBarJson.map((data: IBarSeat) => data)
  return RestaurantBarState
}

// init state
let RestaurantTablesState = initRestaurantTableState().sort((a,b) => a.seats - b.seats)
let RestaurantBarState = initRestaurantBarState()
console.log(RestaurantBarState)

export const bookTable = ({totalPersons,personsWithDisability = 0}: ITableRequest): BookTableType => {
  // step 1: check how many seats are required. People with disabilities need two seats worth of space. Singles should use the bar.
  const seatsRequired = personsWithDisability === 0 ? totalPersons : totalPersons + personsWithDisability

  // if request is a single person with no disability, find bar seat instead
  if(totalPersons === 1 && !personsWithDisability){
    const barSeat = bookBarSeat()
    console.log(`global bar state after booking a single person: ${JSON.stringify(RestaurantBarState)}`)
    return barSeat
  }

  // step 2: search our state to find the next available table with the required number of seats, and return i
  const availableTable = RestaurantTablesState.find(table => table.availability && table.seats >= seatsRequired)

  if(availableTable){
    // set the table object within our state to have availability: false. Atm this effects both global state obj and retured obj
    availableTable.availability = false
    
    console.log(`Global state after found table: ${JSON.stringify(RestaurantTablesState)}`) 
    console.log(`return table object once found table : ${JSON.stringify(availableTable)}`) 

    return availableTable
  } 

  // otherwise no table found
  return {
    errorMsg: 'No spaces available for required spaces right now'
  }
}

export const bookBarSeat = (): BookBarSeatType => {

  // look through RestaurantBarState, find free barSeat and return, else return error
  const barSeat = RestaurantBarState.find(barSeat => barSeat.availability)
  if(barSeat){
    barSeat.availability = false
    return barSeat
  }
  return {
    errorMsg: 'No spaces available for required spaces right now'
  }
}

export const makeTableAvailable = (availableTable: IRestaurantTable): void => {
  let foundTable = RestaurantTablesState.find(table => JSON.stringify(table) === JSON.stringify(availableTable))
  if(foundTable){
    foundTable.availability = true
  }
  console.log(`global state after table:${foundTable?.tableNumber} made available again`, RestaurantTablesState)
}

export const makeBarSeatAvailable = (availableBarSeat: IBarSeat): void => {
  let foundBarSeat = RestaurantBarState.find(barSeat => JSON.stringify(barSeat) === JSON.stringify(availableBarSeat))
  if(foundBarSeat){
    foundBarSeat.availability = true
  }
  console.log(`global state after bar seat:${foundBarSeat?.barSeatNumber} made available again`, RestaurantBarState)
}



// book table
bookTable({totalPersons:2})
bookTable({totalPersons:2})
bookTable({totalPersons:6})
bookTable({totalPersons:2, personsWithDisability: 2})
makeTableAvailable({
  tableNumber: 2,
  seats: 2,
  availability: false,
})
bookTable({totalPersons: 1})
makeBarSeatAvailable({
  barSeatNumber: 1,
  availability: false
})






















// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

