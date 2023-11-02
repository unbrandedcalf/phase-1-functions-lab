function distanceFromHqInBlocks (blockNumber) {
    const headquarters = 42
    return Math.abs(blockNumber-headquarters)
}

function distanceFromHqInFeet (blockNumber) {
    const headquarters = 42
    const blockInFt = 264
    return Math.abs((blockNumber-headquarters) * blockInFt)
}

function distanceTravelledInFeet (num1, num2) {
    const blockInFt = 264
    return Math.abs((num1-num2) * blockInFt)
}

function calculatesFarePrice (start, destination) {
    const block = 264

    if (Math.abs(start-destination) * block < 400) {
        return 0
    }
    else if (Math.abs(start-destination) * block >= 400 && Math.abs(start-destination) * block <= 2000) {
        return (((start-destination) * block) - 400) * .02
    }
    else if (Math.abs(start-destination) * block > 2000 && Math.abs(start-destination) * block <= 2500) {
        return 25
    }
    else if ((start-destination) * block > 2500) {
        return 'cannot travel that far'
    }
}