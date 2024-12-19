# TypeScript Optional Parameter Gotcha

This example demonstrates a common pitfall when using optional parameters in TypeScript.  Optional parameters default to `undefined` if not provided, which can lead to unexpected behavior if not handled properly.

The `bug.ts` file shows the problem: the function `printName` accepts an optional `name` parameter. Calling `printName()` without providing an argument results in `undefined` being printed, not an error.

The `bugSolution.ts` file shows how to mitigate this by explicitly checking for `undefined` or providing a default value.