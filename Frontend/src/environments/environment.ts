const baseUrl = "http://localhost:3001/api/";

export const environment = {
  production: false,
  registerUrl: baseUrl + "auth/register",
  loginUrl: baseUrl + "auth/login",
  usersUrl: baseUrl + "users",
  roomsUrl: baseUrl + 'rooms'
};
