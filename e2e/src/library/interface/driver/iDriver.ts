
import { ElementFinder, Locator, browser } from 'protractor';
import { Element } from '../../ServiceImplementation/element/element';
import { IElement } from '../element/iElement';





export interface IDriver{
    Element<T extends IElement>(by:Locator,type:symbol ):T   
}

