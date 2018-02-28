//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.WScript && this.WScript.LoadScriptFile) { // Check for running in ch
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
    this.WScript.LoadScriptFile("util.js");
}

var tests = [
    {
        name: "Typed arrays support delete of non-indexed properties",
        body: function () {
            const ta = Int8Array.of(42, 33, 17);

            ta.non_indexed = 'whatever';
            assert.areEqual('whatever', ta.non_indexed, "ta.non_indexed is set to 'whatever'");

            delete ta.non_indexed;
            assert.areEqual(undefined, ta.non_indexed, "ta.non_indexed has been deleted");
        }
    },
    {
        name: "Typed arrays don't support delete of indexed properties",
        body: function () {
            const ta = Int8Array.of(42, 33, 17);
            assert.throws(function () { delete ta[0]; }, TypeError, "Should throw on delete of indexed property in typed array", "Cannot delete property");
        }
    }
];

testRunner.runTests(tests);
