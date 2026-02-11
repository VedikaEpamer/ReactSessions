import { Link, useParams, useSearchParams } from "react-router";
import { userLists } from "./dataList";

const UserDetails = () => {
  const paramData = useParams();
  console.log(paramData);

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("pageSize"));
  console.log(searchParams.get("pageNumber"));

  const updateSearchParams = () => {
    setSearchParams({ pageSize: "20", pageNumber: "2" });
  };

  const userData = userLists.find(
    (user) => user.id === parseInt(paramData.id || ""),
  );

  return (
    <div>
      UserDetails
      <br />
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
      <button onClick={updateSearchParams}>Update Search Params</button>
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserDetails;
