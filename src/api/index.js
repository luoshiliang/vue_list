import http from "./address";

export const provinciallevel = (id) =>{
    return http({url:`/area?id=${id}`,method:'get'})
}