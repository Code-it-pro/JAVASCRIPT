// ============================================
// PURITY ANALYSIS
// ============================================

// FUNCTION A: IMPURE ❌
// Reason: Depends on external state (discountRate variable)
// Problem: If discountRate changes, same input price produces different output
// This violates the Pure Function rule: same input = same output always

let discountRate = 0.15;
function applyDiscount(price) {
  return price - (price * discountRate);
}

// FUNCTION B: ALSO IMPURE ❌
// Reason: Uses Math.random() - non-deterministic
// Problem: Same input (username) produces different output each call
// This violates the Pure Function rule: non-deterministic behavior

function generateUserId(username) {
  const randomNum = Math.floor(Math.random() * 1000);
  return `${username}_${randomNum}`;
}

// ============================================
// REFACTORED TO PURE FUNCTIONS ✓
// ============================================

// PURE VERSION OF FUNCTION A
// Solution: Pass discountRate as a parameter instead of using external state
function applyDiscount_PURE(price, discountRate) {
  return price - (price * discountRate);
}

// Example usage:
console.log("--- Function A (Pure) ---");
console.log(applyDiscount_PURE(100, 0.15)); // 85
console.log(applyDiscount_PURE(100, 0.15)); // 85 (same input = same output ✓)
console.log(applyDiscount_PURE(200, 0.10)); // 180


// PURE VERSION OF FUNCTION B
// Solution 1: Pass the random number as a parameter
function generateUserId_PURE(username, randomNum) {
  return `${username}_${randomNum}`;
}

// Example usage:
console.log("\n--- Function B (Pure) ---");
console.log(generateUserId_PURE("alice", 427)); // alice_427
console.log(generateUserId_PURE("alice", 427)); // alice_427 (deterministic! ✓)
console.log(generateUserId_PURE("bob", 839));   // bob_839


// PRACTICAL PATTERN: Separate randomness from purity
// If you need randomness but want a pure core:
function generateRandomId(username) {
  // Generate randomness OUTSIDE the pure function
  const randomNum = Math.floor(Math.random() * 1000);
  // Call pure function with the random value
  return generateUserId_PURE(username, randomNum);
}

console.log("\n--- Function B (With Randomness Separated) ---");
console.log(generateRandomId("charlie")); // charlie_XXX
console.log(generateRandomId("charlie")); // charlie_YYY (different, but purity maintained)


// ============================================
// KEY TAKEAWAYS
// ============================================
/*
Pure Function Requirements:
1. Same input always produces same output
2. No side effects (doesn't modify external state)
3. No dependency on external state
4. No non-deterministic operations (like Math.random())

Function A was impure because: External variable dependency
Function B was impure because: Non-deterministic behavior

Fix for A: Make discountRate a parameter
Fix for B: Make randomNum a parameter OR separate the randomness generation
*/