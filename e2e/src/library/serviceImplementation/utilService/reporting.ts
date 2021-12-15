import { IReporting } from '../../interface/utilService/iReporting';
import { browser } from 'protractor';
let world:any;
    export class Reporting implements IReporting{

        constructor(public _world:any){
         world=_world;
        }

        public LogInfo(messsage:string){
            world.attach("<b>INFO : </b>"+messsage)
        }

        public LogWarning(messsage:string){
            world.attach("<b>WARNING : </b>"+messsage)
        }
        
       public async  AttachScreenshot(){
            return await  browser.takeScreenshot().then(function(screenShot) {   
            world.attach(screenShot, 'image/png');
        }); 
        }

        public LogJson(json:JSON)
        {            
            world.attach(JSON.stringify(json, undefined, 4));
        }

        public LogError(error:Error){
            world.attach("<b>Error : </b>"+error.message)
        }
        
    }