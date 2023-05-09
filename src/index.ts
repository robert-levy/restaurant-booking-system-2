import Restraurant from './Restraurant'

export const Main = () => {
  var tables = require('./RestaurantTables.json')
  var bar = require('./RestaurantBar.json')

  
  let restaurant = new Restraurant('branch-1' , tables,bar)
  restaurant.bookTable({
    totalPersons: 2
  })

  restaurant
  .bookBarSeat()
}
Main()
