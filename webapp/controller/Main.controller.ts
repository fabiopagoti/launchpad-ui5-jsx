import MessageBox from 'sap/m/MessageBox';
import BaseController from './BaseController';
import TypedJSONModel from 'sap/ui/model/json/TypedJSONModel';

import models, { FabioPad, Tile } from '../model/models'
import Event from 'sap/ui/base/Event';
import GenericTile from 'sap/m/GenericTile';
/**
 * @namespace pagoti.fabio.launchpad.jsx.controller
 */
export default class Main extends BaseController {


	private flp: TypedJSONModel<FabioPad>;

	public onInit(): void {
		this.flp = models.createFabioPadModel()
		this.setModel(this.flp, 'flp')
	}

	public sayHello(): void {
		MessageBox.show('Hello World!');
	}

	public onPressTile(event: Event): void {
		const genericTile: GenericTile = event.getSource()
		const appContext = genericTile.getBindingContext('flp')
		const appData = appContext.getObject() as Tile
		window.open(appData.targetURI, "_blank")
	//MessageBox.show('Open app');
	}
}
