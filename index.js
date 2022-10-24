function distanceFromHqInBlocks(pickupLocation) {
    const blocks = Math.abs(42 - pickupLocation);

    return blocks;
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264

    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    const feet = blocks * 264

    return feet;
}

function calculatesFarePrice(start, destination) {
    const blocks = Math.abs(start - destination);
    const feet = blocks * 264

    let fare;
    if (feet <= 399) {
        fare = 0;
    }    else if (feet >= 400, feet <= 2000) {
            fare = (feet - 400) * 0.02;
    }    else if (feet >= 2001, feet <= 2500) {
                fare = 25;
    }    else {
                fare = 'cannot travel that far';
    }

    return fare;
}