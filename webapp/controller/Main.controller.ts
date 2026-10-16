import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import TypedJSONModel from "sap/ui/model/json/TypedJSONModel";

import models, { FabioPad } from "../model/models"
/**
 * @namespace pagoti.fabio.launchpad.jsx.controller
 */
export default class Main extends BaseController {


	private flp: TypedJSONModel<FabioPad>;

	public onInit(): void {
		this.flp = models.createFabioPadModel()
		this.setModel(this.flp, "flp")
	}

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public onPressAboutMe(): void {
		MessageBox.show("Open About me");
	}
}
