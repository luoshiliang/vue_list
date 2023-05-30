import axios from 'axios'

const http = axios.create({
    baseURL:'https://api.i-lynn.cn',
    timeout:5000
})

http.interceptors.request.use((config)=>{
    return config
})

http.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return new Promise(()=>{})
}
)

export default http
// https://api.i-lynn.cn/area
// https://api.i-lynn.cn/area?id=12
// https://api.i-lynn.cn/area?id=904
// https://api.i-lynn.cn/area?id=905