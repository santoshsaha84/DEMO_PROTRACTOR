import "reflect-metadata";

import { Container, interfaces } from "inversify";
import TYPES from "./types";
import { IElement } from './Interface/Element/IElement';
import { Element } from './ServiceImplementation/Element/Element';
import { ILabel } from './Interface/Element/ILabel';
import { Label } from './ServiceImplementation/Element/Label';
import { ElementFinder, browser } from 'protractor';
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);

const container: Container = new Container();
container.bind("ElementFinder").toFunction(ElementFinder)
container.bind<IElement>(TYPES.Element).toDynamicValue((context:interfaces.Context)=>{return new Element(context.container.get("ElementFinder"))});
container.bind<ILabel>(TYPES.Label).toDynamicValue((context:interfaces.Context)=>{return new Label(context.container.get("ElementFinder"))});

type IDictionary = [string, number];

export default container;
