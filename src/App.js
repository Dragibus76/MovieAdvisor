import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Apropos from "./Pages/Apropos/Apropos";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      
      <div className="app">
        <Container>
        
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/Films" component={Movies} />
            <Route path="/Series" component={Series} />
            <Route path="/Rechercher" component={Search} />
            <Route path="/a propos" component={Apropos} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
