import { browser, by, element, ElementFinder, Locator, ElementArrayFinder, WebElement } from 'protractor';
import { ElementProperties } from './elementProperties';
import { IElement } from '../../interface/element/iElement';
import { AllElements } from './allElements';
import { inject, injectable, named } from 'inversify';
import TYPES from 'e2e/src/Library/types';
import container from '../../container.config';
import { Local } from 'protractor/built/driverProviders';
import { isProtractorLocator } from 'protractor/built/locators';
import { resolve } from 'url';


@injectable()
export class Element extends ElementProperties implements IElement{
  constructor(@inject("ElementFinder")  public _element:ElementFinder){
   super(_element)
  } 
      click(){
        this._element.click();
    }

     Element<T extends IElement>(locator:Locator,type:symbol):T{
      var control= container.get<T>(type);
      var ele=this._element.element(locator);
      control._element=ele;
      return control;
      
    }

    AllElements(by:Locator):AllElements {
        var eleArray=this._element.all(by);                      
        return new AllElements(eleArray);
    }
     

    
}