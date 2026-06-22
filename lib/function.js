const axios = require('axios');

async function getFetch(url,opt={}) {
  try {
    if(!url.startsWith('https://') || !url.startsWith('http://')){
      throw new Error('Invalid URL provided');
      return;
    }else if(typeof opt === "object"){
      continue;
    }
    let res = await axios.get(url,opt);
    return res.data;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}
module.exports={
 getFetch
}