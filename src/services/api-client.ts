import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params:{
        key:"12ad6477018c4c11abac7a7eda06d229"
    }
})