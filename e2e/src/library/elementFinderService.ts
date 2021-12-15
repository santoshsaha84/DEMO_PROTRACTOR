import { browser, by, element, ElementFinder, ProtractorBy, Locator } from 'protractor';
import { IElement } from './interface/element/iElement';
import container from './container.config';
import TYPES from './types';
import { AllElements } from './ServiceImplementation/element/allElements';
export class ElementFinderService {

   
    
     Element<T extends IElement>(by:Locator,type:symbol ):T{          
        var control= container.get<T>(type);
        var ele= browser.element(by);
        control._element=ele;
        return control;
    
      }

    AllElements(by:Locator ):AllElements{          
        var eleArray=browser.all(by);                      
        return new AllElements(eleArray);
    }
}