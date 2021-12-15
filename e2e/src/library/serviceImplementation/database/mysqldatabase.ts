import { IDatabase } from '../../interface/database/iDatabase';
import { createConnection } from 'net';
import { Factory } from '../../../factory';
var mysql = require('mysql');





export class MySql implements IDatabase {
    connection:any;
    constructor(public server:string,public database:string,public user:string,public password:string) {
            this.connection=mysql.createConnection({
            host:this.server,
            user:this.user,
            password:this.password,
            database:this.database,
           
           })
    }

     ExecuteQuery(query:String){
       
            this.connection.connect(function(err){
                if(!err) {
                    console.log("Database is connected ... nn");    
                } else {
                    console.log("Error connecting database ... nn");    
                }
                });    
       
     var result =this.connection.query(
     function(err, rows){
        if(err){
            console.log(err)
        }else{
            // console.log(JSON.stringify(rows))

                Object.keys(rows).forEach(function(keyItem){
                var row = rows[keyItem]
                console.log(row.name +" "+ row.designation)
            })
            this.connection.end();
        }

        });
    }
        
    


    

    ExectureQuery(queryList:Array<string>){
        this.connection.connect();
       
    queryList.forEach(query=> this.connection.query(query, function(err, rows){
        if(err){
            console.log(err)
        }else{
            // console.log(JSON.stringify(rows))

            Object.keys(rows).forEach(function(keyItem){
            var row = rows[keyItem]
            console.log(row.name +" "+ row.designation)
            })
        }
        this.connection.end()
        
    }))

    }
  
    GetResult(query:string):any{

    this.connection.connect();
       
    this.connection.query(query, function(err, rows){
        if(err){
            console.log(err)
        }else{
            // console.log(JSON.stringify(rows))

            Object.keys(rows).forEach(function(keyItem){
            var row = rows[keyItem]
            console.log(row.name +" "+ row.designation)
            return rows;
            })
        }
        this.connection.end()
        
    })


    }




}