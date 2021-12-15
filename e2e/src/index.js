var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'e2e/test/report/cucumber_report.json',
        output: 'e2e/test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true, 
        screenshotsDirectory: 'screenshots/',
        storeScreenshots: true,      
        
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);