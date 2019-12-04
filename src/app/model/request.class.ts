import { User } from './user.class';

export class Request {
	id: number;
	user: User;
	description: String;
	justification: String;
	dateNeeded: Date;
	deliveryMode: String;
	status: String;
	total: number;
	submittedDate: Date;
	reasonForRejection: String;
	
	constructor(id: number=0, user: User=null, description: String='', justification: String='', dateNeeded: Date = new Date(), deliveryMode: String='',
                status: String='', total: number=0,  submittedDate: Date = new Date(), reasonForRejection: String='') {
		this.id = id;
		this.user = user;
		this.description = description;
		this.justification = justification;
		this.dateNeeded = dateNeeded;
		this.deliveryMode = deliveryMode;
		this.status = status;
		this.total = total;
		this.submittedDate = submittedDate;
		this.reasonForRejection = reasonForRejection;

    }
}
