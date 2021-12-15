import { IAllElement } from "../../interface/element/iAllElements";
import { ElementArrayFinder, ElementFinder, Locator, element } from 'protractor';
import { IElement } from '../../interface/element/iElement';
import { Element } from './element';
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
