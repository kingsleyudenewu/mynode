//Mocha and CHai was used for our unit testing Mocha was install globally so i suggest when you're testing this application you do npm install -g mocha to install mocha globally while chai (npm install chai --save-dev) should be installed locally in a dev envinronment.
var expect = require('chai').expect;
var tools = require('../lib/tools');
describe('printName()', function(){
    it('should print the last name first', function(){
        var results = tools.printName({first:'Kingsley', last:'Udenewu'});
        expect(results).to.equal('Kingsley Udenewu');
    });
});