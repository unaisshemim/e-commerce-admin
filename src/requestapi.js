    import axios from 'axios';

    const BASE_URL = 'http://localhost:5001';
    // const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFmMjlkOTllZDc2MjNlZDc2NWEwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDc3NTQ5MSwiZXhwIjoxNjY1MDM0NjkxfQ.X8jgbkWjqbV5eOkJmJL64FKCZEdsZDChUj37D90EiqE"
    console.log(token)
    export const publicRequest =axios.create({
        baseURL: BASE_URL,
    })
    export const userRequest=axios.create({
        baseURL: BASE_URL,
        headers:{token:`Bearer ${token}`}
        
    })
    