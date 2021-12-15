import { browser } from "protractor";
import { Before } from 'cucumber';
import { Factory } from './factory';
var {After, Status} = require('cucumber');
var nodemailer = require("nodemailer");





  After(function (testCase) {
    var world = this;
    if (testCase.result.status === Status.FAILED) {
      return browser.takeScreenshot().then(function(screenShot) {
        // screenShot is a base-64 encoded PNG
        world.attach(screenShot, 'image/png');
      });
    }

   
  });

  Before(function(testCase){
    var world=this;
    Factory.SetReporting(world);
  });
