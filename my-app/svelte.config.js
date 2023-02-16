import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		})
	}
};


