/*
Indices of peg positions:
    ----O----   0
    ---------
    ---O-O---   1 2
    ---------
    --O-O-O--   3 4 5
    ---------
    -O-O-O-O-   6 7 8 9
    ---------
    O-O-O-O-O   10 11 12 13 14
*/

// Peg superclass.
function PegPosition(id, jumps) {
    this.id = id;
    this.jumps = jumps;
    this.btn = null;
}

// Create all pegs positions
var pegPositions = {
    0: new PegPosition(0, {"3": 1, "5": 2}),
    1: new PegPosition(1, {"6": 3, "8": 4}),
    2: new PegPosition(2, {"7": 4, "9": 5}),
    3: new PegPosition(3, {"0": 1, "5": 4, "10": 6, "12": 7}),
    4: new PegPosition(4, {"11": 7, "13": 8}),
    5: new PegPosition(5, {"0": 2, "3": 4, "12": 8, "14": 9}),
    6: new PegPosition(6, {"1": 3, "8": 7}),
    7: new PegPosition(0, {"2": 4, "9": 8}),
    8: new PegPosition(8, {"1": 4, "6": 7}),
    9: new PegPosition(9, {"2": 5, "7": 8}),
    10: new PegPosition(10, {"3": 6, "12": 11}),
    11: new PegPosition(11, {"4": 7, "13": 12}),
    12: new PegPosition(12, {"3": 7, "5": 8, "10": 11, "14": 13}),
    13: new PegPosition(13, {"4": 8, "11": 12}),
    14: new PegPosition(14, {"5": 9, "12": 13})
}