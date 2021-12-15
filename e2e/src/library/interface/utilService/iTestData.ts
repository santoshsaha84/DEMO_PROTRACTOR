

export interface ITestData{
    
    GetTestDataByKey(filePath:string,key:(n:any) => boolean):any;

    GetAllTestData(filePath:string):any;
}
