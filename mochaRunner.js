const Mocha  = require('mocha');
const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir:'./docs/mochawesome-reporter'
    }
});
mocha.addFile("./service/router.spec.js");
mocha.run(function(){
    console.log("done");
    process.exit();
});