import { Element } from '../../ServiceImplementation/element/element';
import { ElementFinder, Locator, ElementArrayFinder, WebElement, WebElementPromise } from 'protractor';
import { AllElements } from '../../ServiceImplementation/element/allElements';

 export interface IElement{
   
    _element:ElementFinder;
    
    click();

    // findElement<T extends Element>(type: (new (args: ElementFinder) => T),by:Locator ):T;

    Element<T extends IElement>(by:Locator,type:symbol ):T

    AllElements(by:Locator ):AllElements;

}