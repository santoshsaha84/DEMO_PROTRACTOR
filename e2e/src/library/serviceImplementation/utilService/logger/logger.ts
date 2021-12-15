import log4js from './log4js';
import logger from './log4js';
import { ILogger } from 'e2e/src/Library/interface/utilService/iLogger';



export class Logger implements ILogger{    

    logInfo(message:string){        
        logger.info(message);
    }

    logError(error:Error){
        logger.error(error);
    }

}