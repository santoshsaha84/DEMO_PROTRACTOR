import "reflect-metadata";

import { Container, interfaces } from "inversify";
import TYPES from "./types";
import { IElement } from './interface/element/iElement';
import { Element } from './ServiceImplementation/element/element';
import { ILabel } from './interface/element/iLabel';
import { Label } from './ServiceImplementation/element/label';
import { ElementFinder, browser } from 'protractor';
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);

const container: Container = new Container();
container.bind("ElementFinder").toFunction(ElementFinder)
container.bind<IElement>(TYPES.Element).toDynamicValue((context:interfaces.Context)=>{return new Element(context.container.get("ElementFinder"))});
container.bind<ILabel>(TYPES.Label).toDynamicValue((context:interfaces.Context)=>{return new Label(context.container.get("ElementFinder"))});

type IDictionary = [string, number];

export default container;
