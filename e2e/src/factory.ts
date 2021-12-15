import TYPES from './Library/types';
import { IReporting } from './Library/interface/utilService/iReporting';
import { Reporting } from './Library/ServiceImplementation/UtilService/reporting';
import { ITestData } from './Library/interface/utilService/iTestData';
import { Iconfig } from './AppConfig/Iconfig';
import { ExcelUtil } from './Library/ServiceImplementation/UtilService/excelTestData';
import { ILogger } from './Library/interface/utilService/iLogger';
import { Logger } from './Library/ServiceImplementation/UtilService/logger/logger';


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