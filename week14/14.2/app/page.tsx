import axios from "axios";

async function getUserData() {
  await new Promise( (r) => setTimeout((r), 5000));
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}

// async component
export default async function Home() {

  const userDetails = await getUserData();

  return (
    <>
      {userDetails.name}
      {userDetails.email}
    </>
  );
}
