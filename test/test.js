var assert = require('assert');
describe('Hello DM World Module', function() {
  it('should return -1 when "Hello" is missing', function() {
    assert.equal(-1, "Hallo World".indexOf("Hello"));
  });
  it('should return 0 when sentence starts with Hello', function() {
    assert.equal(0, "Hello World from dmogiliver@insightops!".indexOf("Hello"));
  });
});

