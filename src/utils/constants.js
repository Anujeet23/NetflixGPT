
export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const BG_LOGO = 'https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const PHOTO_URL = "https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"


export const API_OPTIONS = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
};


export const SUPPORTED_LANGUAGES = [{identifier: 'en', name: 'English'}, {identifier: 'hindi', name: 'Hindi'}, {identifier: 'marathi', name: 'Marathi'}, {identifier: 'spanish', name: 'Spanish'}];

export const OPENAI_API_KEY = `${process.env.REACT_APP_OPENAI_API_KEY}`;