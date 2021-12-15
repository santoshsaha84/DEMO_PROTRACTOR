import { IDictionary } from '../Library/types';
import { OperationResult } from '../Library/Enums/OperationResult';
import { Factory } from '../factory';

export class commonOperations{
    
    constructor(){

    }
    public LogMessage(msgs:IDictionary[]):void
    {
      var success=msgs.filter(x=>x[0]==OperationResult.success)[0][1];   
      Factory.GetLogger().logInfo(success);
      Factory.reporting.LogInfo(success);
    }
    public LogErrorMessage(msgs:IDictionary[]):void
    {
      var failure=msgs.filter(x=>x[0]==OperationResult.failure)[0][1];   
      Factory.GetLogger().logInfo(failure);
      Factory.reporting.LogInfo(failure);    
    }
}