export class Vendor {
	id: number;
	vendor: Vendor;
	partNumber: String;
	name: String;
	price:  number;
	unit: String;
	photoPath: String;
	
	constructor(id: number=0, vendor: Vendor=null, partNumber: String='', name: String='', price:  number=0, unit: String='', photoPath: String='') {
		this.id = id;
		this.vendor = vendor;
		this.partNumber = partNumber;
		this.name = name;
		this.price = price;
		this.unit = unit;
		this.photoPath = photoPath;
    }
}