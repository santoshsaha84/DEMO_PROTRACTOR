import log4js from './Log4js';
import logger from './Log4js';
import { ILogger } from 'e2e/src/Library/Interface/UtilService/ILogger';



export class Logger implements ILogger{    

    logInfo(message:string){        
        logger.info(message);
    }

    logError(error:Error){
        logger.error(error);
    }

}