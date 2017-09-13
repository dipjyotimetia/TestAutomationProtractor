/**
 * Created by Dipjyoti on 10-Jul-16.
 */
//Objects Required
var logger = require('../UserDefinedFunctions/log.js');
var objects = require('../ObjectRepository/Objects.json');
var functions = require('../UserDefinedFunctions/basePage.js');
var util = require('../UserDefinedFunctions/Utility.js');

// Page Objects
var loginBank = require('./../PageObjects/LoginBank.js');
var AddCustomer = require('./../PageObjects/AddCustomer.js');

// Test Data
var url = objects.bankURL;
var username = objects.banklogindetails.username;
var password = objects.banklogindetails.password;
var CustomerName = util.cellFromXLSX('H2');
var DOB = util.cellFromXLSX('J2');
var Address = util.cellFromXLSX('L2');
var City = util.cellFromXLSX('N2');
var State = util.cellFromXLSX('P2');
var Pin = util.cellFromXLSX('R2');
var PhoneNo = util.cellFromXLSX('T2');
var Email = util.cellFromXLSX('V2');
var Password = util.cellFromXLSX('X2');


//Test Definations
describe("Bank application Test", function () {

  beforeAll(function () {
    functions.IgnoreSynchronization();
    functions.GetUrl(url);
    functions.MaximizeWindow();
    console.log("Bank url is" + url);
    logger.log('info', 'Website navigated successfully');
  });

  it("Validate user credentials", function () {
    loginBank.login(username, password);
    console.log("Sign in successful");
    logger.log('info', 'Bank sign in successful');
  });

  it("AddCustomer", function () {
    browser.driver.findElement(by.xpath("html/body/div[2]/div/ul/li[2]/a")).click();
    AddCustomer.AddCustomer(CustomerName, DOB, Address, City, State, Pin, PhoneNo, Email, Password);
    browser.driver.findElement(by.name("name")).sendKeys(CustomerName);

  });
  afterAll(function () {
    browser.close();
    browser.quit();
  });
});