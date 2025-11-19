// tests/sample-project/index.js
const assert = require('assert');
const elliptic = require('elliptic');

// We need to verify that the shim is in place.
// The easiest way to do that is to check the version.
assert.strictEqual(elliptic.version, '9999.0.0-soatok', 'elliptic was not replaced');
console.log('Success: elliptic package was replaced by the shim.');
