import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppState } from "./context/background/AppState";
import Account from "./modules/Account";
import Recipient from "./modules/Recipient";
import Success from "./modules/Success";
import { Wrapper } from "./components/Wrapper";

const App = () => (
  <AppState>
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="recipient" element={<Recipient />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  </AppState>
);

export default App;
