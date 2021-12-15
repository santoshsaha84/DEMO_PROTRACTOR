import { Element } from '../../ServiceImplementation/Element/Element';
import { ElementFinder, Locator } from 'protractor';
import { AllElements } from '../../ServiceImplementation/Element/AllElements';
import { IElement } from './IElement';

export interface IAllElement{    

  
    AllElements(by:Locator ):AllElements;

    count();
}