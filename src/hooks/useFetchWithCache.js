import { useEffect, useReducer, useContext } from "react";
import { CacheContext } from "../CacheContext";

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

export function useDebouncedFetch(fetchResource, param, timeout) {
	const cache = useContext(CacheContext);
	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		if (cache.state[param]) {
			dispatch({ type: "SUCCESS", payload: cache.state[param] });
			return;
		}

		const timeoutId = setTimeout(async () => {
			dispatch({ type: "LOAD" });
			try {
				const resource = await fetchResource(param);
				dispatch({ type: "SUCCESS", payload: resource });
				cache.dispatch({ type: "SET_CACHE", payload: { key: param, value: resource } });
			} catch (error) {
				dispatch({ type: "FAILURE", payload: error });
			}
		}, timeout);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [param, cache, fetchResource, timeout]);

	return state;
}

export function useInstantFetch(fetchResource, param) {
	const cache = useContext(CacheContext);
	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		if (cache.state[param]) {
			dispatch({ type: "SUCCESS", payload: cache.state[param] });
			return;
		}

		const fetch = async () => {
			dispatch({ type: "LOAD" });
			try {
				const resource = await fetchResource(param);
				dispatch({ type: "SUCCESS", payload: resource });
				cache.dispatch({ type: "SET_CACHE", payload: { key: param, value: resource } });
			} catch (error) {
				dispatch({ type: "FAILURE", payload: error });
			}
		};
		fetch();
	}, [param, cache, fetchResource]);

	return state;
}
