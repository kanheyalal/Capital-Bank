import axios from 'axios';

export async function getData() {
  const res = await axios.get("https://spark-backend-capital.herokuapp.com/getData");
  return res.data;
}

export async function getHistory() {
  const res = await axios.get('https://spark-backend-capital.herokuapp.com/getHistory');
  return res.data;
}

export async function getDetailsOfAUser(userId) {
  const Userdata = await axios.get(`https://spark-backend-capital.herokuapp.com/getData/${userId}`);
  return Userdata.data;
}

export async function selectCustomer(userId) {
  const res = await axios.get(`https://spark-backend-capital.herokuapp.com/getData/${userId}`);
  return res.data;
  //   setShowlist(false);
}

export async function updateMoney(details) {
  const data = axios.patch(`https://spark-backend-capital.herokuapp.com/updateMoney/${details.id}`, {
    updatedMoney: details.money,
  });
  return data;
}

export async function getCustomerNames (userId)  {
  const res = await axios.get(
    `https://spark-backend-capital.herokuapp.com/getname/${userId}`
  );
  return res.data;
};