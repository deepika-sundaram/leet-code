var findDisappearedNumbers = function(nums) {
    
    const numberSet = new Set();

    for(let i = 1; i < nums.length + 1; i++) {
        numberSet.add(i);
    }

    nums.forEach((element) => {
        if(numberSet.has(element)) {
            numberSet.delete(element);
        }
    });

    return Array.from(numberSet);
};