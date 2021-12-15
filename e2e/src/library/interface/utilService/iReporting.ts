
        export interface IReporting{

            LogInfo(messsage:string)

            LogWarning(messsage:string)
            
            AttachScreenshot()    

            LogError(error:Error)

            LogJson(json:JSON)
            
        }