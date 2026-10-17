import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";

import Device from "sap/ui/Device";
import TypedJSONModel from "sap/ui/model/json/TypedJSONModel";


export type Tile = {
	title: string;
	hasImage?: boolean;
	imageUrl?: string;
	targetURI?: string;
	icon?: string
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
		const model = new JSONModel(Device);
		model.setDefaultBindingMode(BindingMode.OneWay);
		return model;
	},

	createGreetingModel: (): TypedJSONModel<{ now: Date, message: string }> => {
		const data = {
			now: new Date(),
			message: ''
		}
		if (data.now.getHours() < 12 && data.now.getHours() >= 5) {
			data.message = "Good morning"
		} else if (data.now.getHours() < 18) {
			data.message = "Good afternoon"
		} else {
			data.message = "Good evening"
		}
		const model = new TypedJSONModel(data)
		return model
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
				},

				{
					title: "e-Books written by me",
					tiles: []

				},

				{
					title: "Social Media",
					tiles: [
						{
							title: "Linkedin",
							targetURI: "https://www.linkedin.com/in/fabiopagoti/",
							icon: "sap-icon://bootstrap-icons/linkedin"
						}
					]
				},

				{
					title: "UI5 Apps",

				}

			]
		};
		const model = new TypedJSONModel(apps)
		return model
	}


};
