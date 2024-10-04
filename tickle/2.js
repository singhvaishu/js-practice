function sellTickets(ticketType, numberOfTickets, ticketInventory) {
    const ticket = ticketInventory.find(item => item.ticketType === ticketType);

    if (!ticket || ticket.count < numberOfTickets) {
        return false;
    }

    ticket.sold += numberOfTickets;
    ticket.count -= numberOfTickets;

    if (ticket.count === 0) {
        ticket.status = 'sold-out';
    } else if (ticket.count < 10) {
        ticket.status = 'few-left';
    } else {
        ticket.status = 'available';
    }

    return true;
}

const ticketInventory = [
    { ticketType: 'vip', price: 100, count: 50, sold: 25, status: 'available' },
    { ticketType: 'general', price: 60, count: 120, sold: 33, status: 'available' }
];

const saleResult = sellTickets('vip', 5, ticketInventory);
console.log(saleResult);
console.log(ticketInventory);
