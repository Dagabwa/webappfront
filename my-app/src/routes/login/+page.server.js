import { fail, redirect } from '@sveltejs/kit';
import * as api from '../../api.js';

export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const body = await api.post('users/login', {
				username: data.get('username'),
				password: data.get('password')
		});

		if (body.errors) {
			return fail(401, body);
		}

		const value = body.jwt;
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/locations');
	}
};
