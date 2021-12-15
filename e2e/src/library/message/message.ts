import {String,StringBuilder} from "typescript-string-operations"
import { OperationResult } from '../Enums/OperationResult';
import { IDictionary } from '../types';
import { IDriver } from '../Interface/Driver/IDriver';

let dictionary:IDictionary[]=[];

export class MessageService {
    constructor(parameters) {
        
    }

    public static GenerateLoggerMessage(operationName:string,fieldNameValuePair:IDictionary[]):IDictionary[]
    {
      var _data=new MessageData(fieldNameValuePair);
      _data._operationName=operationName;
      var failureMessage=new MessageMaker(_data).failureMessage();
      var successMessage=new MessageMaker(_data).successMessage();      
      dictionary.push([OperationResult.success,successMessage]);
      dictionary.push([OperationResult.failure,failureMessage]);
      return dictionary;      
    }
}

export class  MessageData {

    public _operationName:string;
    constructor(public fieldNameValuePair:[string,string][]) {
        
    }
}

export class MessageMaker {
    public message:StringBuilder;
    constructor(public _data:MessageData) {
        this.message=new StringBuilder();
    }

    buildMessage():string
    {
        for(let keyValue of this._data.fieldNameValuePair)
        {
            if(!String.IsNullOrWhiteSpace(keyValue[1]))
            {
              this.message.Append(keyValue[0]+" : "+keyValue[1]);
              this.message.Append('\n');
            }
        }
        return this.message.ToString();
    }

    failureMessage():string{
      
        if(!String.IsNullOrWhiteSpace(this._data._operationName) )
        {
            this.message.Append(OperationResult.failure+" "+this._data._operationName);
            this.message.Append('\n')

        }
        return this.buildMessage();
    }  

    successMessage():string{
      
        if(!String.IsNullOrWhiteSpace(this._data._operationName) )
        {
            this.message.Append(OperationResult.success+" "+this._data._operationName);
            this.message.Append('\n')

        }
        return this.buildMessage();
    }  
}
