import TYPES from './Library/types';
import { IReporting } from './Library/Interface/UtilService/IReporting';
import { Reporting } from './Library/ServiceImplementation/UtilService/Reporting';
import { ITestData } from './Library/Interface/UtilService/ITestData';
import { Iconfig } from './AppConfig/Iconfig';
import { ExcelUtil } from './Library/ServiceImplementation/UtilService/ExcelTestData';
import { ILogger } from './Library/Interface/UtilService/ILogger';
import { Logger } from './Library/ServiceImplementation/UtilService/Logger/Logger';


let config: Iconfig = require('./AppConfig/config.json');

export class  Factory{

public static reporting :IReporting;


public static SetReporting(world:any)
{
   switch(config.Reporting)
   {
      case "CucumberReports":
          this.reporting=new Reporting(world);
          break;          

   }

}

public static GetTestData(sheetName?:string):ITestData
{
    switch(config.TestData)
    {
       case "Excel":
           return new ExcelUtil(sheetName);
           break;          
 
    }
}

public static GetLogger(sheetName?:string):ILogger
{
    switch(config.Logger)
    {
       case "Log4js":
           return new Logger();
           break;          
 
    }
}


}