import View from "sap/ui/core/mvc/View";
import type Control from "sap/ui/core/Control";
import Page from "sap/m/Page";
import GenericTile from "sap/m/GenericTile";

/**
 * @namespace pagoti.fabio.launchpad.jsx.view
 */
export default class Main extends View {
	getAutoPrefixId(): boolean {
		return true;
	}

	getControllerModuleName(): string {
		return "pagoti/fabio/launchpad/jsx/controller/Main";
	}

	createContent(): Control {
		return (
			<Page>
				<GenericTile header="About me" press=".onPressAboutMe">

				</GenericTile>
			</Page >
		);
	}
}