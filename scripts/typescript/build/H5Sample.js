var H5Sample = /** @class */ (function () {
    function H5Sample(scriptArgs) {
        var userContext = ScriptUtil.GetUserContext();
        this.company = userContext.CurrentCompany;
        this.division = userContext.CurrentDivision;
        this.controller = scriptArgs.controller;
        this.log = scriptArgs.log;
        this.args = scriptArgs.args;
    }
    H5Sample.Init = function (scriptArgs) {
        new H5Sample(scriptArgs).run();
    };
    H5Sample.prototype.run = function () {
        this.contentElement = this.controller.GetContentElement();
        this.log.Info("H5Sample loaded");
    };
    return H5Sample;
}());
//# sourceMappingURL=H5Sample.js.map