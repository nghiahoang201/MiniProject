import Layout from "./component/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./component/user/user";
import Home from "./component/home";
import AddUser from "./component/user/addUser";
import UpdateUser from "./component/user/updateUser";
import Error from "./component/404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/user"
            element={
              <Layout>
                <User />
              </Layout>
            }
          />

          <Route
            path="/createUser"
            element={
              <Layout>
                <AddUser />
              </Layout>
            }
          />

          <Route
            path="/*"
            element={
              <Layout>
                <UpdateUser />
              </Layout>
            }
          />
          <Route path="/404" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
