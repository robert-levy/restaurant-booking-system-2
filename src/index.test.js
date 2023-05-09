import * as RestaurantBooking from './index'

describe('test', () => {
    it('should return seat 1', () => {
        expect(RestaurantBooking.bookSeat(1)).toEqual([1])
    });
    it('should return seat 2', () => {
        expect(RestaurantBooking.bookSeat(1)).toEqual([2])
    });
    it('should return seats 3-6', () => {
        expect(RestaurantBooking.bookSeat(4)).toEqual([3,4,5,6])
    });

    // 6 seats taken so far
    
    it('should return -1 if not enough seats for booking', () => {
        expect(RestaurantBooking.bookSeat(23)).toEqual(-1)
    });
    
    it('should return -1 when all seats are taken', () => {
        RestaurantBooking.resetSeats()
        RestaurantBooking.bookAllSeats()
        expect(RestaurantBooking.bookSeat(1)).toBe(-1)
    });
    
    
})
