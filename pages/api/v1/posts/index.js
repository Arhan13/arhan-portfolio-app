import axios from 'axios';

export default async (req, res) => {
  try {
      //Sending axios request
    const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //Getting the data
    const posts = axiosRes.data;
    //Seending them to the response(res)
    res.status(200).json(posts.slice(0, 10));
  } catch(e) {
    console.error(e);
    res.status(e.status || 400).json({message : 'Api error'});//If no status then we will return 400;
  }
}