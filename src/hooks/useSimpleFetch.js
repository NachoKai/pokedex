import { useState, useEffect, useReducer } from "react";

//#region naive

export const useFetchOnChange = (fetchResource, param, timeout) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			if (param) {
				setLoading(true);
				setError(null);
				setData(null);
				try {
					const resource = await fetchResource(param);
					setData(resource);
				} catch (error) {
					setError(error);
				}
				setLoading(false);
			} else {
				setData(null);
				setError(null);
			}
		}, timeout);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [fetchResource, param, timeout]);

	return { data, error, loading };
};

//#endregion naive

//#region reducer

const initialState = { loading: false, data: null, error: null };

const fetchReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "LOAD":
			return { ...state, loading: true, data: null, error: null };
		case "SUCCESS":
			return { ...state, loading: false, data: payload, error: null };
		case "FAILURE":
			return { ...state, loading: false, data: null, error: payload };
		default:
			return state;
	}
};

export const useFetchReducer = (fetchResource, param, timeout) => {
	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			dispatch({ type: "LOAD" });
			try {
				const resource = await fetchResource(param);
				dispatch({ type: "SUCCESS", payload: resource });
			} catch (error) {
				dispatch({ type: "FAILURE", payload: error });
			}
		}, timeout);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [fetchResource, param, timeout]);

	return state;
};

//#endregion reducer
