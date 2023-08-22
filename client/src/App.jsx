import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Homes from "./routes/Homes";
import Watchlist from "./routes/Watchlist";
import Navbar from "./components/Navbar";
import CryptoHistoryPage from "./components/CryptoHistory"
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/news";
import Portfolio from "./routes/Portfolio";
import Ticket from "./routes/Ticket";
import { UserAuth } from "./context/AuthContext";
import ErrorDisplay from "./components/ErrorDisplay";
import ProtectedRoute from "./ProtectRoute/ProtectedRoute";
import TicketHistory from "./components/TicketHistory";
import CryptoAdress from "./components/cryptoAdress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user] = UserAuth();

  return (
    <>
      {user.data && <Navbar />}
      <Routes>
<Route path="/" element={<Homes />} />
        <Route path="/home" element={user.data ? <Home /> : <Login />} />
        <Route path="/signup" element={user.data ? <Account /> : <Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ticket" element={<Ticket />} />
          <Route path="/portfolio/history" element={<TicketHistory />} />
          <Route path="/crypto/:name" element={<CryptoHistoryPage />} />
          <Route path="/cryptos/:name" element={<CryptoDetails />} />
          <Route path="/cryptoAdress" element={<CryptoAdress />} />
          <Route
          path="/news"
          element={<News simplified={true} count={10} />}
        />
        </Route>
        <Route
          path="*"
          element={<ErrorDisplay error={"Route does not exist"} />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

// Current:
//   - Check for authentication once if entering any private routes
// Alternative:
//   - A more secure way would be to wrap every route with ProtectedRoute
//   - This re-renders and checks for token every route change
//   - Pros: More secure, if token removed, then unauthorized upon route change
//   - Cons: Api calls (in AuthContext) on every route change, heavier load on network
