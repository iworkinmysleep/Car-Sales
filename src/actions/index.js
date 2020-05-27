export const ADD_FEATURE = "ADD_FEATURES";
export const REMOVE_FEATURE = "REMOVE_FEATURES";

export const addFeatures = (item) => {
	return {
		type: ADD_FEATURE,
		payload: item,
	};
};

export const removeFeatures = (item) => {
	return {
		type: REMOVE_FEATURE,
		payload: item,
	};
};
