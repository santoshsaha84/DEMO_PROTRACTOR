import { IAllElement } from "../../Interface/Element/IAllElements";
import { ElementArrayFinder, ElementFinder, Locator, element } from 'protractor';
import { IElement } from '../../Interface/Element/IElement';
import { Element } from './Element';
import container from '../../container.config';

export class AllElements implements IAllElement
{    
    constructor(public elementArray:ElementArrayFinder)
    {

    }
   
   

    AllElements(by:Locator):AllElements {
        var eleArray=this.elementArray.all(by);                         
        return new AllElements(eleArray);
    }

    count(){
        return this.elementArray.count;
    }

}
