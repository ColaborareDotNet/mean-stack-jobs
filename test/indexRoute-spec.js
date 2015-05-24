
var indexRoute = require ('../routes/index');

describe("index route", function(){
  "use strict";
  it("should be defined and not null", function(){
    expect(indexRoute).toBeDefined();
    expect(indexRoute).not.toBeNull();    
  });
});


