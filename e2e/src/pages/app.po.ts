import { browser, by, element, ProtractorBy, By, Locator, promise } from 'protractor';
import { baseBage } from '../Common/basePage';
import { Label } from '../Library/ServiceImplementation/element/label';
import { Element } from '../Library/ServiceImplementation/element/element';
import { IElement } from '../Library/interface/element/iElement';
import { ILabel } from '../Library/interface/element/iLabel';
import TYPES from '../Library/types';
import{ExcelUtil} from '../Library/ServiceImplementation/UtilService/excelTestData';
import { ITestData } from '../Library/interface/utilService/iTestData';
import { Logger } from '../Library/ServiceImplementation/UtilService/logger/logger';
import { Factory } from '../factory';
import { MySql } from '../Library/ServiceImplementation/database/mysqldatabase';
import transport from '../../SendEmail';




export class AppPage extends baseBage{  
 
 constructor(public ExcelUtil:ITestData)
 {
   super();
 }
  
  navigateTo() {    
    return browser.get('/');
  }

  // getTitleText() {
  //   return element(by.css('app-root h1')).getText();
  // }

   getTitleText() {   
    
   
   var ul= this.driver.Element<IElement>(by.xpath('//ul'),TYPES.Element);
 
   var linkTest=ul.Element<ILabel>(by.xpath('//a[text()="Tour of Heroes"]'),TYPES.Label);
  //  var count=AlllinkTest.count();
 
  
  // var mail=new Email();
  // mail.setMailOptions();
  // mail.sendEmail();
  //  console.log(count);
  // var mysql=new MySql("LAPTOP-KOCCQ4NN","AdventureWorksDW2012","LAPTOP-KOCCQ4NN\\My Home PC","")
  // mysql.ExecuteQuery("select * from DimAccount")
  //  var linkTest=AlllinkTest.Element<ILabel>('//a[text()="Tour of Heroes"]',TYPES.Label);
   return linkTest.getLabelText();
   
   
    
    // return page.findElementsById('app-root h1').getText();
  }

  
  getSubTitleText(){
     var log=new Logger();
     log.logInfo("This is information Message")
     return element(by.xpath('//ul/li[1]/h2/a')).getText();
    
  }

  // getData()
  // {
  //   // var data=this.ExcelUtil.GetTestDataByKey("D:/SampleData.xlsx",x=>x.Rep=="Jones");
  //   return data;
  // }

  
  
}
