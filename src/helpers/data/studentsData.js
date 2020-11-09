import axios from 'axios';
import ApiKeys from './apiKeys.json';

const baseUrl = ApiKeys.firebaseKeys.databaseURL;

// const students = [
//   {
//     imgUrl: 'https://avatars2.githubusercontent.com/u/66916708?v=4',
//     isDead: false,
//     name: 'Chris L',
//     id: '-MLcd36NBajZU3kqCSSq',
//   },
//   {
//     imgUrl: 'https://avatars3.githubusercontent.com/u/67810121?v=4',
//     isDead: false,
//     name: 'Chris L',
//     id: '-MLcd36NBajZU3kqCSSq',
//   },
// ];

const getAllStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`).then((response) => {
    const studentResponse = response.data;
    resolve(Object.values(studentResponse));
  }).catch((error) => reject(error));
});

export default getAllStudents;
