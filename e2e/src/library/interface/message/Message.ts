// // // import { IMessageData } from './IMessageData';
// // // import { String, StringBuilder } from 'typescript-string-operations';
// // // import { stringify } from 'querystring';
// // // import { OperationResult } from '../../Enums/OperationResult';


// // // export abstract class Message {

// // //     public message:StringBuilder;
    
// // //     constructor(public _data:IMessageData) {
        
// // //         this.message=new StringBuilder();
// // //     }

// // //     FailureMessageHeader():void{
      
// // //         if(String.IsNullOrWhiteSpace(this._data._operationName) )
// // //         {
// // //             this.message.Append(OperationResult.failure+this._data._operationName);
// // //             this.message.Append('\n')

// // //         }
// // //     }  

// // //     SuccessMessageHeader():void{
      
// // //         if(String.IsNullOrWhiteSpace(this._data._operationName) )
// // //         {
// // //             this.message.Append(OperationResult.success+this._data._operationName);
// // //             this.message.Append('\n')

// // //         }
// // //     }  

// // //     public abstract BuildMessage():string;

    

// // // }