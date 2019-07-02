const { ServiceBroker } = require("moleculer");
const config = require('./config.moleculer');

const broker = new ServiceBroker(config);
broker.loadServices(folder = "./services", fileMask = "**/*.service.js");
broker.start();
