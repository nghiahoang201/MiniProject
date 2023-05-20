import Layout from "./component/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./component/user/user";
import Home from "./component/home";
import AddUser from "./component/user/addUser";
import UpdateUser from "./component/user/updateUser";
import Error from "./component/404";
import router from "./component/router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={router.home}
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path={router.users}
            element={
              <Layout>
                <User />
              </Layout>
            }
          />

          <Route
            path={router.createUsers}
            element={
              <Layout>
                <AddUser />
              </Layout>
            }
          />

          <Route
            path={router.updateUsers}
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
