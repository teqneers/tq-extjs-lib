Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'TQ': '../src'
    }
});

Ext.onReady(function() {
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
});