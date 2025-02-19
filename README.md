# JavaScript Function: Unexpected Input Handling

This repository demonstrates a common JavaScript bug related to insufficient input validation in a simple addition function. The original code handles `null` values correctly but fails to address other potential issues such as non-numeric inputs.

The `bug.js` file contains the initial code, while `bugSolution.js` provides a more robust solution that addresses these issues.

## Bug Description

The `foo` function adds two numbers. It correctly handles `null` inputs but lacks checks for other data types, potentially leading to unexpected behavior or errors (e.g., NaN).

## Solution

The improved version in `bugSolution.js` adds input validation to ensure both `a` and `b` are numbers before performing the addition. If either input is not a number, a default value (0) is returned.

This improved version avoids runtime errors and produces predictable results for a wider range of inputs.