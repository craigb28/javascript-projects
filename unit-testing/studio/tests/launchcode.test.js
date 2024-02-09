// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Object keys match appropriate values", function(){
    expect(launchcode.Organization).toBe("nonprofit");
    expect(launchcode.executiveDirector).toBe("Jeff");
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("List of programs includes WebDev, DataAnalysis, and Liftoff", function(){
    expect(launchcode.programsOffered.includes("WebDev")).toBe(true);
    expect(launchcode.programsOffered.includes("DataAnalysis")).toBe(true);
    expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("When passed a number that is ONLY divisible by 2, returns Launch!", function (){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("When passed a number that is ONLY divisible by 3, returns Launch!", function (){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("When passed a number that is ONLY divisible by 5, returns Rocks!", function (){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 3, returns LaunchCode!", function (){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("When passed a number that is divisible by 3 AND 5, returns Code Rocks!", function (){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });


  // Write your unit tests here!
  
});