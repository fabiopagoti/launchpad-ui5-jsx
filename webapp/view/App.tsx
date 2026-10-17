import View from "sap/ui/core/mvc/View";
import type Control from "sap/ui/core/Control";
import App from "sap/m/App";

/**
 * @namespace my.app.view
 */
export default class AppView extends View {

	getAutoPrefixId(): boolean {
		return true;
	}

	getControllerModuleName(): string {
		return "pagoti/fabio/launchpad/jsx/controller/App";
	}

	createContent(): Control {
		return (
			<App id="app" >

			</App> as Control
		);
	}
}