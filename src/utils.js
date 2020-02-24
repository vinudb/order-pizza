export const buildCells = (rowCount, colCount) => {
    let baseCells = [];
    let counter = 1;
    for (let i = 0; i < rowCount; i++) {
        let rowCells = [];
        for (let j = 0; j < colCount; j++) {
            rowCells.push({
                cellNum: counter,
                applyClass: 'unknown'
            });
            counter++;
        }
        baseCells.push(rowCells)
    }
    return baseCells;
}

export const buildDiamonds = (length, max) => {
    let diamondCells = [];
    let min = 1;
    while (diamondCells.length < length) {
        let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (diamondCells.indexOf(randNum) === -1) {
            diamondCells.push(randNum);
        }
    }
    return diamondCells;
}

export const isDiamondPresent = (cellNum, diamondCells) => {
    return diamondCells.indexOf(cellNum) === -1 ? false : true;
}

export const getHint = (diamondCells, baseCells, cellIndex) => {
    let m = cellIndex[0];
    let n = cellIndex[1];

    // define what a neighbor is
    let v = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    // filter edges & map
    return v.filter(([h, j]) => {
        let pickItem = h + m >= 0 && h + m < baseCells.length && j + n >= 0 && j + n < baseCells[0].length;
        let diamondSearch = true;
        if (pickItem) {
            diamondSearch = diamondCells.indexOf(baseCells[h + m][j + n].cellNum) === -1 ? false : true
        }
        return (pickItem && diamondSearch)
    })
        .map(([h, j]) => {
            let direction = '';
            if (h + m === m) {
                direction = j + n > n ? 'arrowRight' : 'arrowLeft'
            } else {
                direction = h + m > m ? 'arrowBottom' : 'arrowTop'
            }
            return {
                value: baseCells[h + m][j + n].cellNum,
                points: [h + m, j + n],
                direction
            }
        })
}