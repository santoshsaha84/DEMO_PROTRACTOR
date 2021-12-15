import { ITestData } from '../../Interface/UtilService/ITestData';

var XLSX=require('xlsx')

export class ExcelUtil implements ITestData{

constructor(public sheetName:string){}

GetTestDataByKey(filePath:string,expression:(n:any) => boolean):any
{
    var workbook=XLSX.readFile(filePath);
    var workSheet=workbook.Sheets[this.sheetName];  
    var array= XLSX.utils.sheet_to_json(workSheet);
    var filterResult= array.filter(expression);
    return filterResult;
    
}

GetAllTestData(filePath:string):any
{
    var workbook=XLSX.readFile(filePath);
    var workSheet=workbook.Sheets[this.sheetName];
  
    return XLSX.utils.sheet_to_json(workSheet);
}


}