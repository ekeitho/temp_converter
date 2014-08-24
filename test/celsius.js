describe("celsius tests", function ()
{
   var convert = require("../convert").converter;
   var expect = require("chai").expect;

   it("true tests", function() {
      expect(convert("c", 10).toFixed(2)).to.equal('75.60'); 
   });

   it("false tests", function() {
      expect(convert("c", 10).toFixed(2)).to.not.equal("75.00");
   });

});
