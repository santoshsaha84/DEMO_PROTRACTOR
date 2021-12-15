export interface IDatabase{

  ExecuteQuery(query:String);

  ExectureQuery(queryList:Array<string>);

  GetResult(query:string);
}