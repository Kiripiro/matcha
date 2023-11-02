/* Chat */
export interface Block {
	id: number;
	author_id: number;
	blocked_user_id: number;
	isBlocked: boolean;
}

export interface User {
	id: number;
	username: string;
	first_name: string;
	last_name: string;
	picture_1: string;
	status: string;
	block: Block;
}

export interface Message {
	id: number;
	author_id: number;
	recipient_id: number;
	message: string;
	date: Date;
}

export interface StatusData {
	userId: number;
	status: string;
}

/* Auth */
export interface RegisterResponseData {
	message: string;
	user: {
		id: number,
		username: string,
		email: string,
		first_name: string,
		last_name: string,
		age: number,
		email_checked: boolean,
		location_permission: boolean
	};
}

export interface LoginResponseData {
	message: string;
	user: {
		id: number,
		username: string,
		first_name: string,
		last_name: string,
		age: number,
		gender: string,
		email_checked: boolean,
		complete_register: boolean,
		sexual_preferences: string,
		biography: string,
		picture_1: string,
		picture_2: string,
		picture_3: string,
		picture_4: string,
		picture_5: string,
		location_permission: boolean,
		created_at: string
	};
}

export interface GetUserResponseData {
	message: string;
	user: {
		id: number,
		username: string,
		first_name: string,
		last_name: string,
		age: number,
		email_checked: boolean,
		complete_register: boolean,
		gender: string,
		sexual_preferences: string,
		biography: string,
		picture_1: string,
		picture_2: string,
		picture_3: string,
		picture_4: string,
		picture_5: string,
		tags: string[],
		fame_rating: number,
		you_blocked_he: boolean,
		he_blocked_you: boolean,
		you_reported_he: boolean,
		city: string,
		location_permission: boolean
	};
}

export interface HomeUserData {
	id: number,
	username: string,
	first_name: string,
	last_name: string,
	age: number,
	complete_register: boolean,
	gender: string,
	sexual_preferences: string,
	biography: string,
	picture_1: string,
	picture_2: string,
	picture_3: string,
	picture_4: string,
	picture_5: string,
	tags: string[],
	you_blocked_he: boolean,
	he_blocked_you: boolean,
	you_reported_he: boolean,
	location_permission: boolean
}

export interface CompleteRegisterResponseData {
	message: string;
	user: {
		gender: string,
		sexual_preferences: string,
		biography: string,
		picture_1: string,
		picture_2: string,
		picture_3: string,
		picture_4: string,
		picture_5: string,
		tags: UserTags[]
	};
}

export interface UpdateLocationResponseData {
	message: string;
	user: {
		latitude: number,
		longitude: number,
		city: string
	};
}

export interface IpApiResponseData {
	status: string;
	lat: number;
	lon: number;
}

export interface LocationIQApiResponseData {
	address: {
		city: string;
		municipality: string;
	};
}

export interface EmailValidationResponseData {
	message: string;
	error: string;
}

export interface PasswordResetRequestResponseData {
	message: string;
	error: string;
}

export interface PasswordResetValidationResponseData {
	message: string;
	error: string;
}


/* Sockets */
export interface StatusData {
	userId: number;
	status: string;
}

/* Relations */
export interface CheckLikeResponseData {
	exist: boolean;
}

export interface CheckMatchResponseData {
	exist: boolean;
}

export interface CreateLikeResponseData {
	message: string;
	likeId: Number;
}

export interface DeleteLikeResponseData {
	message: string;
	deleted: boolean;
}

export interface CreateBlockResponseData {
	message: string;
	blockId: number;
	data: {
		author_id: number,
		recipient_id: number
	};
}

export interface DeleteBlockResponseData {
	message: string;
}

export interface CreateReportResponseData {
	message: string;
	blockId: number;
	data: {
		author_id: number,
		recipient_id: number
	};
}

export interface CreateBlockResponseData {
	message: string;
	blockId: number;
	data: {
		author_id: number,
		recipient_id: number
	};
}

export interface DeleteReportResponseData {
	message: string;
}

export interface GetAllProfileViewsResponseData {
	data: {
		author_id: number,
		authorUsername: string,
		authorFirstName: string,
		authorLastName: string,
		recipient_id: number
	}[];
}

export interface GetAllProfileLikesResponseData {
	data: {
		author_id: number,
		authorUsername: string,
		authorFirstName: string,
		authorLastName: string,
		recipient_id: number
	}[];
}

/* Home */

export interface UserSimplified {
	id: number,
	username: string,
	age: number,
	tags: UserTags[],
	latitude: number,
	longitude: number
}

export interface UserTags {
	owner_id: number,
	name: string
}

export interface GetInterestingUsersResponseData {
	users: UserSimplified[]
}

export const sortSelectType = {
	Location: "Location",
	Age: "Age",
	Tags: "Tags"
}

export const filterSelectType = {
	Location: "to less than 20km",
	Age: "+/- 5 years",
	Tags: "3 common tags minimum"
}

/* Settings */
export interface UserSettings {
	username: string;
	first_name: string;
	last_name: string;
	gender: string;
	sexual_preferences: string;
	biography: string;
	picture_1: string;
	picture_2: string;
	picture_3: string;
	picture_4: string;
	picture_5: string;
	tags: string[];
	location_permission: boolean;
}

/* Tags */
export interface Tag {
	id: number;
	name: string;
	owner_id: number;
}

/* Profile */

export interface ElementListData {
	author_id: number,
	authorUsername: string,
	authorFirstName: string,
	authorLastName: string,
	recipient_id: number
}