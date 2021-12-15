import { Element } from '../../ServiceImplementation/element/element';
import { ElementFinder, Locator } from 'protractor';
import { AllElements } from '../../ServiceImplementation/element/allElements';
import { IElement } from './iElement';

export interface IAllElement{    

  
    AllElements(by:Locator ):AllElements;

    count();
}