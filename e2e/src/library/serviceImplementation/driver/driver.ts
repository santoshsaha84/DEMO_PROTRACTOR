
import { ElementFinder, Locator, browser, promise } from 'protractor';
import { IDriver } from '../../interface/driver/iDriver';
import { ElementFinderService } from '../../elementFinderService';
import { Element } from '../element/element';
import { IElement } from '../../interface/element/iElement';
import "reflect-metadata";

var {After, Status} = require('cucumber');





export class Driver implements IDriver{
   
   public elementFinder :ElementFinderService;
    constructor()
    {
      this.elementFinder=new ElementFinderService();
    }
   
   public Element<T extends IElement>(by:Locator,type:symbol ):T{
     
    return this.elementFinder.Element(by,type);
   }

  
   

}