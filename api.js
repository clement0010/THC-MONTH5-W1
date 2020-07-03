// const axios = require('axios');

// const getUser = async () => {
//   const res = await axios.get('https://randomuser.me/api/', {
//     params: {
//       results: '10',
//       gender: 'male',
//     },
//   });
//   console.log(res)
//   return res;
// };

// getUser()

const axios = require('axios');

const getUser = async () => {
  const res = await axios.get('https://randomuser.me/api/');

  console.log(res.data.results);
};

getUser();
