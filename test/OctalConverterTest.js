var assert = require('assert');
var octalConverterFunctions = require('../OctalConverter');

describe('givenDecimal1WhenConvertThen1', function () {
    it('convert(1) = 1', function () {
        //Given
        var a = 1;
        var expectedResult = 1;

        // When
        var actualResult = octalConverterFunctions.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})