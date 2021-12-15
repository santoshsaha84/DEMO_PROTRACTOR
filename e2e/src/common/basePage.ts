import { IDriver } from '../Library/interface/driver/iDriver';
import { Driver } from '../Library/ServiceImplementation/Driver/driver';
import { browser } from 'protractor';
import { IReporting } from '../Library/interface/utilService/iReporting';
import { Reporting } from '../Library/ServiceImplementation/UtilService/reporting';



export class baseBage{

   
   public driver:IDriver;
   
    constructor()
    {      
      this.driver=new Driver();
    }    
}