import { browser, by, element, ElementFinder } from 'protractor';
import { ElementFinderService } from '../../elementFinderService';
import { inject, injectable } from 'inversify';

@injectable()
export class ElementProperties{
   public elementFinder:ElementFinderService;

  constructor(@inject("ElementFinder") public _element:ElementFinder){
    this.elementFinder=new ElementFinderService
  } 
  
}