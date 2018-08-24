import { 
	SEARCH_CHANGE,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constant';

const initialStateSearch = {
	searchTerm : ''
}

export const searchRobots = (state=initialStateSearch,action={}) => {
	switch(action.type) {
		case SEARCH_CHANGE:
			return Object.assign({}, state, { searchTerm: action.payload });
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending : false,
	robots: [],
	error:''
}

export const getRobots = (state=initialStateRobots,action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending:true});
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {isPending:false, robots: action.payload});
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {isPending:false, error: action.payload});

		default:
			return state;
	}
}