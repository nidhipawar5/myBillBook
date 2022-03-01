import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/main/main";
import Header from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Items from "./components/item/items";

export default function App() {
  const isLoggedIn = localStorage.getItem("UserDetails");
  return (
    <BrowserRouter>
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/items" component={Items} />
            <Redirect to="/items" />
          </Switch>
        ) : (
          <Switch>
            <Route
              component={() => (
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              )}
            />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}
