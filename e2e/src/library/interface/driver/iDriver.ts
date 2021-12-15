
import { ElementFinder, Locator, browser } from 'protractor';
import { Element } from '../../ServiceImplementation/Element/Element';
import { IElement } from '../Element/IElement';





export interface IDriver{
    Element<T extends IElement>(by:Locator,type:symbol ):T   
}

