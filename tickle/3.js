function allocateSeats(numSeats, seatAvailabilityMap) {
    for (let blockIndex = 0; blockIndex < seatAvailabilityMap.length; blockIndex++) {
        const block = seatAvailabilityMap[blockIndex];
        let contiguousSeats = [];

        for (let seat of block) {
            const seatNumber = Object.keys(seat)[0];
            const isAvailable = seat[seatNumber];

            if (isAvailable) {
                contiguousSeats.push(seatNumber);
                if (contiguousSeats.length === numSeats) {
                    contiguousSeats.forEach(seatNum => {
                        seat[seatNum] = false;
                    });
                    return contiguousSeats;
                }
            } else {
                contiguousSeats = [];
            }
        }
    }

    return [];
}

const seatAvailabilityMap = [
    [{ 'a1': true }, { 'a2': true }, { 'a3': false }, { 'a4': true }, { 'a5': true }, { 'a6': true }, { 'a7': true }],
    [{ 'a8': true }, { 'a9': true }, { 'a10': true }, { 'a11': false }, { 'a12': true }, { 'a13': true }, { 'a14': false }],
    [{ 'b1': true }, { 'b2': true }, { 'b3': true }, { 'b4': true }, { 'b5': true }, { 'b6': true }, { 'b7': true }, { 'b8': true }, { 'b9': true }, { 'b10': true }]
];

const allocatedSeats = allocateSeats(3, seatAvailabilityMap);
console.log(allocatedSeats);
console.log(seatAvailabilityMap);
