import { browser, by, element, ProtractorBy, By, Locator, promise } from 'protractor';
import { baseBage } from '../Common/basePage';
import { Label } from '../Library/ServiceImplementation/Element/Label';
import { Element } from '../Library/ServiceImplementation/Element/Element';
import { IElement } from '../Library/Interface/Element/IElement';
import { ILabel } from '../Library/Interface/Element/ILabel';
import TYPES from '../Library/types';
import{ExcelUtil} from '../Library/ServiceImplementation/UtilService/ExcelTestData';
import { ITestData } from '../Library/Interface/UtilService/ITestData';
import { Logger } from '../Library/ServiceImplementation/UtilService/Logger/Logger';
import { Factory } from '../factory';
import { MySql } from '../Library/ServiceImplementation/Database/MySqlDatabase';
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
