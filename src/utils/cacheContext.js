import React, { useEffect, useReducer, createContext } from "react";

export const CacheContext = createContext();
CacheContext.displayName = "Cache";

const cacheReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_CACHE":
			return {
				...state,
				[payload.key]: payload.value,
			};
		default:
			return state;
	}
};

export function CacheProvider({ children }) {
	const [state, dispatch] = useReducer(cacheReducer, JSON.parse(localStorage.getItem("JIKAN_CACHE")));

	useEffect(() => {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("JIKAN_CACHE", serializedState);
	}, [state]);

	return <CacheContext.Provider value={{ state, dispatch }}>{children}</CacheContext.Provider>;
}

// Sin hooks para mostrar que es posible
export const withCache = Component => props => {
	return <CacheContext.Consumer>{cache => <Component {...props} cache={cache} />}</CacheContext.Consumer>;
};
