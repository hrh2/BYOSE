const default_api = import.meta.env.VITE_DEFAULT_API
const auth_api = import.meta.env.VITE_AUTH_API;
const image_api = import.meta.env.VITE_IMAGE_API;
const upload_api = import.meta.env.VITE_UPLOAD_API;

export const servers ={
    activities:default_api,
    authenticated:auth_api,
    image:image_api,
    upload:upload_api
}