console.clear();

// commented code is for single fetch. uncomment and comment out getUsers variable, fn and calls

// variables for URIs and users
// const API = "https://randomuser.me/api"; //url to get one user, getUser()
// const API = "https://randomuser.me/api/?results=20"; // uri to get 20 users, getUsers()

let usersArr = []; // arrary of users


// fn to get one user
// const getUser = () => {
//   fetch(API)
//     .then((res) => res.json())
//     .then((data) => {
//       // userArr = data.results;
//       usersArr = usersArr.concat(data.results);
//       // usersArr = usersArr;
//       // console.log("getUser() result: ", usersArr);
//     })
//     .then(() => printUsers());
// };


// fn to get multiple users in one uri
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=20')
    .then((res) => res.json())
    .then((data) => {
      // usersArr = usersArr.concat(data.results)
      usersArr = data.results;
      // console.log('fetch users ', users)
      // console.log("get multiple users ", data.results);
      // return usersArr;
    })
    .then(() => printUsers());
};

// fn used to print the results. 
// here we would also need to parse and attach to DOM 
const printUsers = () => {
  console.log("printing: ", usersArr);
};





// uncomment line for just one result
// getUser(); 


// multiple users at once.
getUsers();
