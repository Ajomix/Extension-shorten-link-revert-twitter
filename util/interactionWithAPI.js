const API = 'https://powerful-forest-47605.herokuapp.com/v1/create';

const shortening = async(url)=>{
   const data = await axios({
      method: 'post',
      url: API + `?apikey=gb8gsaomc0`,
      data:JSON.stringify({url}),
      headers:{
         "Content-Type":"application/json"
      }
   });
   return data.data.message;
}

