import { element,ElementFinder, by } from 'protractor';
import { Element } from './Element';
import { ILabel } from '../../Interface/Element/ILabel';
import { injectable, inject, named } from 'inversify';
import { IDriver } from '../../Interface/Driver/IDriver';
import TYPES, { IDictionary } from '../../types';
import { Factory } from '../../../factory';

import { OperationResult } from '../../Enums/OperationResult';
import {  commonOperations } from '../../../Common/common';
import { MessageService } from '../../message/message';



@injectable()
export class Label extends Element implements ILabel {
public commonOps:commonOperations=new commonOperations();;
dictionary:IDictionary[]=[]
constructor(@inject(TYPES.ElementFinder)  public _element:ElementFinder){   
  super(_element);
 
  }
    getLabelText(){
    let that=this;
    var msgs= MessageService.GenerateLoggerMessage("GetLabelTest",[["No Arg2","No Value1"],["No Arg2","No Value2"]]);
    return  this._element.getText().then(null,function(err){
    that.commonOps.LogErrorMessage(msgs);   
    throw err;
    }).then(function(text){
      
     that.commonOps.LogMessage(msgs);
     Factory.reporting.LogInfo(Function.name)
     return text;
    });
  }
  

 
}
// interface Function {
//   name: string;
// }

// // Using it
// function f(): string { return f.name; }
