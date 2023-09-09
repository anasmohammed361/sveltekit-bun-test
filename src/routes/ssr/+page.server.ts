import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		randomNumber: Math.random().toString()
	};
};
