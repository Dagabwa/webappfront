import * as api from '../../api.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies}) {
  const token = cookies.get('jwt')
  if(!token) {
    throw redirect(307,'/login')
  }
  let locations = await api.get(`locations?limit=50`, token)
  if(locations.status===401){
    cookies.delete('jwt')
    throw redirect(307,'/login')
  }
  const isAdmin = (JSON.parse(atob(token.split('.')[1])).role==="admin")
  let addFormIsActive = false;
  return {isAdmin, locations, addFormIsActive};

}

/** @type {import('./$types').Actions} */
export const actions = {
  createLocation: async ({cookies, request}) => {
    if (!cookies.get('jwt'))
      throw redirect(307, '/login');
    const data = await request.formData();
    const location = {
      filmType: data.get('filmType'),
      filmProducerName: data.get('filmProducerName'),
      endDate: data.get('endDate'),
      filmName: data.get('filmName'),
      district: data.get('district'),
      geolocation: {
        coordinates: [data.get('latitude'),data.get('longitude')],
        type: "Point",
      },
      sourceLocationId: data.get('sourceLocationId'),
      filmDirectorName: data.get('filmDirectorName'),
      address: data.get('address'),
      startDate: data.get('startDate'),
      year: data.get('year'),
    }
    await api.post(
      `locations`,
      location,
      cookies.get('jwt')
    );
    return {location}
  },


  updateLocation: async ({cookies, request, url}) => {
    if (!cookies.get('jwt'))
      throw redirect(307, '/login');
    const id = url.searchParams.get('id');
    const data = await request.formData();
    const updatedLocation = {
      filmType: data.get('filmType'),
      filmProducerName: data.get('filmProducerName'),
      endDate: data.get('endDate'),
      filmName: data.get('filmName'),
      district: data.get('district'),
      geolocation: {
        coordinates: [data.get('latitude'), data.get('longitude')],
        type: "Point"
      },
      sourceLocationId: data.get('sourceLocationId'),
      filmDirectorName: data.get('filmDirectorName'),
      startDate: data.get('startDate'),
      year: data.get('year'),
    }
    await api.patch(
      `locations/${id}`,
      updatedLocation,
      cookies.get('jwt')
    );
    return {updatedLocation}
  },

  deleteLocation: async ({cookies,url}) => {
    if (!cookies.get('jwt'))
      throw redirect(307, '/login');
    const id = url.searchParams.get('id');
    await api.del(
      `locations/${id}`,
      cookies.get('jwt')
    );
  },
}
