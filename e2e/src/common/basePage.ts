import { IDriver } from '../Library/Interface/Driver/IDriver';
import { Driver } from '../Library/ServiceImplementation/Driver/Driver';
import { browser } from 'protractor';
import { IReporting } from '../Library/Interface/UtilService/IReporting';
import { Reporting } from '../Library/ServiceImplementation/UtilService/Reporting';



export class baseBage{

   
   public driver:IDriver;
   
    constructor()
    {      
      this.driver=new Driver();
    }    
}