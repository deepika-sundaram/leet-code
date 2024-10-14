var climbStairs = function(n) {
     if (n <= 1) {
        return 1;  // There's 1 way to climb 1 step or 0 steps (staying at the bottom)
    }
    
    // Create an array to store the number of ways to climb up to step n
    let arr = new Array(n + 1);
    
    // Initialize the base cases
    arr[0] = 1; // 1 way to stay at step 0
    arr[1] = 1; // 1 way to reach step 1 (just 1 step)
    
    // Fill the array with the number of ways to climb up to each step
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];  // ways to get to step i
    }
    
    // Return the number of ways to reach the nth step
    return arr[n];
};