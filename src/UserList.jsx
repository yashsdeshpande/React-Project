import { NavLink } from "react-router";

function UserList() {
  const userData = [
    { id: 1, name: "John" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Peter" },
    { id: 4, name: "Tony" },
    { id: 5, name: "Bruce" },
    { id: 6, name: "Wayne" },
  ];
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>UserList page</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <NavLink to={"/users/"+item.id}>{item.name}</NavLink>
          </h4>
        </div>
      ))}

<h1>UserList page with username</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <NavLink to={"/users/"+item.id+"/"+item.name}>{item.name}</NavLink>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default UserList;
