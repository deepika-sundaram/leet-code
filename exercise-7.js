var minimumDifference = function(nums, k) {

    const isEdgeCase = (k === 1);
    if (isEdgeCase) return 0;

    nums = nums.sort((a, b) => {
        return a - b;
    });

    let i = 0;
    let j = k - 1;
    let minDiffrence = Infinity;

    while (j < nums.length) {
        minDiffrence = Math.min(Math.abs(nums[i] - nums[j]), minDiffrence);
        j++;
        i++;
    }