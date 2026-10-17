import View from "sap/ui/core/mvc/View";
import type Control from "sap/ui/core/Control";
import Page from "sap/m/Page";
import GenericTile from "sap/m/GenericTile";

import Panel from "sap/m/Panel";
import { For } from "ui5/community/jsx/runtime/runtime/runtime";
import TileContent from "sap/m/TileContent";
import ImageContent from "sap/m/ImageContent";
import HeroBanner from "sap/f/HeroBanner";
import VBox from "sap/m/VBox";
import DateTime from "sap/ui/model/type/DateTime";
import Image from "sap/m/Image";
import Icon from "sap/ui/core/Icon";
import FlexBox from "sap/m/FlexBox";


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
				<VBox>
					<HeroBanner
						headerText="{greeting>/message}"
						overlineText={{
							path: "greeting>/now",
							type: new DateTime(),
							formatOptions: {

							}
						}} >
					</HeroBanner>
					<VBox>
						<For each={{ path: "flp>/groups" }}>{() =>
							<Panel expandable={true} expanded={true} headerText="{flp>title}">
								<FlexBox direction={"Row"} items="{ path: 'flp>tiles' , templateShareable: true}" alignItems={"Start"} >
									<GenericTile header="{flp>title}" subheader="{flp>subTitle}" press=".onPressTile" class="sapUiSmallMarginEnd">
										<TileContent footer="">
											<ImageContent src="{flp>icon}" class="flep-tile-icon" />
										</TileContent>
									</GenericTile>
								</FlexBox>
							</Panel>
						}
						</For>
					</VBox>

				</VBox>
			</Page >
		);
	}
}