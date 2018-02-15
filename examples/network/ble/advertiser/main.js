/*
 * Copyright (c) 2016-2017  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 * 
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

import BLE from "ble";

let advertisingData = {
	incompleteUUID16List: ['180D'],
	shortName: "Brian",
};

let scanResponseData = {
	incompleteUUID16List: ['180D'],
	shortName: "Brian",
	publicAddress: "01:02:03:04:05:06",
	incompleteUUID128List: ['00000000-0000-1000-8000-00805F9B34FB'],
	flags: 0xBE
};

let ble = new BLE;
ble.initialize();
ble.advertisingData = advertisingData;
ble.scanResponseData = scanResponseData;

let advertisingParams = { discoverable:true, connectable:true };	// @@ make these optional
ble.startAdvertising(advertisingParams);

debugger;
