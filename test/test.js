var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Generator', function() {
  describe('#indexOf()', function() {
  	it('learning', function(){
    	function* helloWorldGenerator() {
		  yield 'hello';
		  yield 'world';
		  yield  123 + 456;
		  return 'ending';
		}

		var hw = helloWorldGenerator();

		console.log(hw.next())
		console.log(hw.next())
		console.log(hw.next())
		console.log(hw.next())
		console.log(hw.next())




		function* f() {
		  console.log('执行了！')
		}

		var generator = f();

		setTimeout(function () {
		  generator.next()
		}, 200);




var arr = [1, [[2, 3, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}

  	})

  });
});