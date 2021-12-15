import { Before, Given, Then, When, defineSupportCode } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { Driver } from '../Library/ServiceImplementation/Driver/Driver';
import { browser } from 'protractor';
import { ExcelUtil } from '../Library/ServiceImplementation/UtilService/ExcelTestData';
import { IReporting } from '../Library/Interface/UtilService/IReporting';
import { Reporting } from '../Library/ServiceImplementation/UtilService/Reporting';
import { Factory } from '../factory';
import { Logger } from '../Library/ServiceImplementation/UtilService/Logger/Logger';

let page: AppPage;


Before(() => {
  page = new AppPage(new ExcelUtil("SalesOrders"));  

});

defineSupportCode(function ({Given, When, Then}){

  Given(/^I am on the home page$/, async function() {
  // debugger;
  await page.navigateTo();
  
 
  // debugger;
  var v1=await page.getTitleText();
  var v2=await page.getSubTitleText(); 
  
  
   await Factory.reporting.AttachScreenshot();

   var data =Factory.GetTestData("SalesOrders").GetTestDataByKey("D:/SampleData.xlsx",x=>x.Rep=="Jones");
    
   await Factory.reporting.LogJson(data);

   
  
  debugger;
  console.log(v1+" "+v2);
  debugger;
});


When(/^I do nothing$/, async function() {
  debugger;
  // expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!'); 
});

Then(/^I should see the title$/, async function() {
  debugger;
 
  expect(await page.getTitleText()).to.equal("Tour of Heroes");
  
  
});
});
