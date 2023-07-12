import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AllRoutes } from "./routes/index";
import { AuthProviders } from "./Context/AuthProviders";
import PersonaLayout from "./Layout/PersonaLayout/PersonaLayout";
import { StateProvider } from "./Context/StateProvider";
import { DataProviders } from "./Context/DataProviders";
import Fetch from "./components/Item/Fetch";
const App = () => {
  return (
    <>
      <DataProviders>
        <StateProvider>
          <AuthProviders>
            <Fetch />
            <Router>
              <Routes>
                {AllRoutes.map((route, index) => {
                  let Layout = PersonaLayout;
                  if (route.Layout) Layout = route.Layout;
                  else Layout = PersonaLayout;

                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  );
                })}
              </Routes>
            </Router>
          </AuthProviders>
        </StateProvider>
      </DataProviders>
    </>
  );
};

export default App;
