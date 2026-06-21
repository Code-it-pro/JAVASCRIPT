// PURE vs IMPURE FUNCTIONS - Simple Explanation
//
// PURE FUNCTION:
// A pure function always gives the same output for the same input,
// and it does not change anything outside itself.
// Example: add(2, 3) always returns 5, no matter when or where it runs.
//
// IMPURE FUNCTION:
// An impure function may give different output for the same input,
// or it may change something outside the function.
// Example: getting the current time or reading a global variable.

// This is a pure function because it only uses its inputs
// and returns a result without changing anything outside.
function applyDiscount(price, discountRate) {
    return price - (price * discountRate);
}

// Example usage:
// applyDiscount(100, 0.15); // Always returns 85
// applyDiscount(100, 0.15); // Always returns 85 again

// This is also a pure function because it only uses the inputs
// and returns the same result for the same inputs.
function generateUserId(username, randomNum) {
    return `${username}_${randomNum}`;
}

// Example usage:
// const randomValue = Math.floor(Math.random() * 1000); // randomness happens outside
// generateUserId("alex", randomValue);

// NOTE:
// If generateUserId instead called Math.random() inside itself,
// it would be impure because the same username would not always
// produce the same output.
