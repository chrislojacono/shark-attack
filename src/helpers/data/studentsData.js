import axios from 'axios';
import firebaseConfig from './apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getAllStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`).then((response) => {
    const studentResponse = response.data;
    resolve(Object.values(studentResponse));
  }).catch((error) => reject(error));
});

export default getAllStudents;
