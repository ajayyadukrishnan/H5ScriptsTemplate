class H5Sample {
    private company: string;
    private division: string;
    private controller: IInstanceController;
    private log: IScriptLog;
    private args: string;
    private contentElement: IContentElement;
    constructor(scriptArgs: IScriptArgs) {
        const userContext = ScriptUtil.GetUserContext();
        this.company = userContext.CurrentCompany;
        this.division = userContext.CurrentDivision;
        this.controller = scriptArgs.controller;
        this.log = scriptArgs.log;
        this.args = scriptArgs.args;
    }
    public static Init(scriptArgs: IScriptArgs) {
        new H5Sample(scriptArgs).run();
    }
    private run(): void {
        this.contentElement = this.controller.GetContentElement();
        this.log.Info("H5Sample loaded");
    }
}