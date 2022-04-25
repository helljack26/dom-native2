//Split details about to two Ul block
export const generateTwoUlBlock = function (array) {
    const detailsBlock1 = [];
    const detailsBlock2 = [];
    if (array !== undefined && array.length < 9 && array.length !== 0) {
        for (let i = 0; i <= 8; i++) {
            if (i < 4) {
                if (array[i] !== undefined) {
                    detailsBlock1.push(array[i])
                }
            } else if (i < 8) {
                if (array[i] !== undefined) {
                    detailsBlock2.push(array[i])
                }
            }
        }
    }
    return { detailsBlock1, detailsBlock2 }
}



