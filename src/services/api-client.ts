import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"7ee7519257fc41009e3af3a6f79934c0"
    }
})