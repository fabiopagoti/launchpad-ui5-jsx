import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";

import Device from "sap/ui/Device";
import TypedJSONModel from "sap/ui/model/json/TypedJSONModel";


export type Tile = {
	title: string;
	hasImage?: boolean;
	imageUrl?: string;
}

export type Group = {
	title?: string;
	tiles?: Tile[]
}

export type FabioPad = {
	groups?: Group[]
}


export default {

	createDeviceModel: (): JSONModel => {
		const oModel = new JSONModel(Device);
		oModel.setDefaultBindingMode(BindingMode.OneWay);
		return oModel;
	},

	createFabioPadModel: (): TypedJSONModel<FabioPad> => {
		const apps: FabioPad = {
			groups: [
				{
					title: "Start here",
					tiles: [
						{
							title: "Profile",
							hasImage: true,
							imageUrl: ""
						}
					]
				}
			]
		};
		const model = new TypedJSONModel(apps)
		return model
	}


};
