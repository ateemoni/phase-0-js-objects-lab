// Create the attendee object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Function to log the attendee's name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Function to log the ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Function to update the ticket type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
}

// Function to update the ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

// Function to remove the 'event' property
function removeEventProperty(attendee) {
    delete attendee.event;
}

// Function to add 'checkedIn' property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}

// Export everything for Jest tests
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};
