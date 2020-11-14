import axios from 'axios';

export default async (req, res) => {
  try {
      //Sending axios request
    const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
    //Getting the data
    const post = axiosRes.data;
    //Seending them to the response(res)
    res.status(200).json(post);
  } catch(e) {
    console.error(e);
    res.status(e.status || 400).json({message : 'Api error'});//If no status then we will return 400;
  }
}