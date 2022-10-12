var H5Sample = (function () {
    function H5Sample(scriptArgs) {
    this.mingleEndpoint = 'Mingle';
        this.m3Endpoint = '/M3/m3api-rest/v2/execute';
        this.controller = scriptArgs.controller;
        this.elem = scriptArgs.elem;
        this.args = scriptArgs.args;
        this.log = scriptArgs.log;
        this.scriptName = 'H5Sample';
        this.detachRequesting = null;
        this.detachRequested = null;
        this.detachRequestedCompleted = null;
    }
    // detachEvents
    H5Sample.prototype.detachEvents = function () {
        this.detachRequesting();
        this.detachRequested();
        this.detachRequestedCompleted();
    };
    // attachEvents
    H5Sample.prototype.attachEvents = function (controller) {
        var _this = this;
        this.detachRequesting = controller.Requesting.On(function (e) {
            _this.onRequesting(e);
        });
        this.detachRequested = controller.Requested.On(function (e) {
            _this.onRequested(e);
        });
        this.detachRequestedCompleted = controller.Requested.On(function (e) {
            _this.onRequestedCompleted(e);
        });
    };
    // onRequesting
    H5Sample.prototype.onRequesting = function (args) {
        var _this = this;
    };
    // onRequested
    H5Sample.prototype.onRequested = function (args) {
    };
    // onRequestedCompleted
    H5Sample.prototype.onRequestedCompleted = function (args) {
        this.log.Info('onRequestedCompleted....');
        if (this.controller.RenderEngine.PanelHeader != '') {
            this.detachEvents();
        }
    };
    /**
     * Script initialization static function; Entry point for M3 Panel personalized script
     */
    H5Sample.Init = function (scriptArgs) {
        new H5Sample(scriptArgs).run();
    };
    /**
     * Starting point of every H5 script
     */
    H5Sample.prototype.run = function () {
        console.clear();
        this.log.Info(this.scriptName + ' is now running...');
        this.attachEvents(this.controller);
        
        
    };
    H5Sample.prototype.callAPI = function (request) {
        console.log(request);
        return new Promise((resolve, reject) => {
            IonApiService.Current.execute(request).then(function (response) {
                if(response.data.nrOfFailedTransactions == 1){
                    console.log(response);
                }
                resolve();
            }).catch(function (response) {
                console.log(response);
                resolve();
            });
        });
    };
    return H5Sample;
}());