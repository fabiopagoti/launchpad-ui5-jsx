import View from "sap/ui/core/mvc/View";
import type Control from "sap/ui/core/Control";
import Page from "sap/m/Page";
import GenericTile from "sap/m/GenericTile";

import Panel from "sap/m/Panel";
import { For } from "ui5/community/jsx/runtime/runtime/runtime";


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
			<Page title="{i18n>mainPageTitle}">
				<For each={{ path: "flp>/groups" }}>{() =>
					<Panel headerText="{flp>title}" content="{flp>tiles}">

						<GenericTile header="About me" press=".onPressAboutMe">

						</GenericTile>

					</Panel>
				}
				</For>

			</Page >
		);
	}
}