import { useState } from "react";
import AdminMovieForm from "./AdminMovieForm.jsx";
import AdminMovieList from "./AdminMovieList.jsx";

function Admin() {
  const [refresh, setRefresh] = useState(false);

  function triggerRefresh() {
    setRefresh(!refresh);
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <AdminMovieForm onMovieAdded={triggerRefresh} />
      <AdminMovieList refresh={refresh} />
    </div>
  );
}
export default Admin;

