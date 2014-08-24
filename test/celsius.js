describe("celsius tests", function ()
{
   var convert = require("../convert").converter;
   var expect = require("chai").expect;

   it("true tests", function() {
    
      expect(convert("c", 1)).to.equal(72);
   
   });

});
