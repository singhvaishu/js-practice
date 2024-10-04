function computeTotalRevenue(sales, pricing) {
    let totalRevenue = 0;

    for (const sale of sales) {
        const ticketType = sale.type;
        const ticketsSold = sale.sold;

        if (pricing[ticketType]) {
            totalRevenue += pricing[ticketType] * ticketsSold;
        }
    }

    return totalRevenue;
}

const pricing = { vip: 100, regular: 80, balcony: 50 };
const sales = [
    { type: 'vip', sold: 53 },
    { type: 'regular', sold: 87 },
    { type: 'balcony', sold: 40 }
];

const revenue = computeTotalRevenue(sales, pricing);
console.log(revenue);
