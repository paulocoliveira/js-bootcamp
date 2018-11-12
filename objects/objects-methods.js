let restaurant = {
    name: 'ASB',
    guestCapacity: 50,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(guestsToAdd){
        if (this.checkAvailability(guestsToAdd) == true) {
            this.guestCount = this.guestCount + guestsToAdd
        }
    },
    removeParty: function(guestsToRemove){
        this.guestCount = this.guestCount - guestsToRemove
    }
}

//console.log(restaurant.checkAvailability(5))

console.log(restaurant)
restaurant.seatParty(10)
console.log(restaurant)
restaurant.removeParty(4)
console.log(restaurant)