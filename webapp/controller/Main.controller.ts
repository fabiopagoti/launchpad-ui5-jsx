import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace pagoti.fabio.launchpad.jsx.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public onPressAboutMe(): void {
		MessageBox.show("Open About me");
	}
}
