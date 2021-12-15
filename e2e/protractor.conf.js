// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var reporter = require('cucumber-html-reporter');


exports.config = {
  allScriptsTimeout: 11000,  
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    // format: 'json: tmp/results.json',  
    format:'json:e2e/test/report/cucumber_report.json',
    require: ['./src/steps/**/*.steps.ts','./src/hook.ts','./src/index.js'],
    setDefaultTimeout:'30000'      
       
        },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  
  
}  

//   ,plugins: [{
//     package: 'protractor-multiple-cucumber-html-reporter-plugin',
//     options:{
//         // read the options part for more options
//         automaticallyGenerateReport: true,
//         removeExistingJsonReportFile: true
//     }
// }]
};
