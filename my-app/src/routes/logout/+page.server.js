import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  cookies.delete("jwt");
  throw redirect(307, '/login');
}