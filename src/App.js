import "./App.css";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import FriendsList from "./components/FriendsList/FriendsList";
import Statistics from "./components/Stats/Statistics";
import Transaction from "./components/TransactionHistory/Transaction.jsx";

function App() {
  return (
    <div className="App">
      <SocialProfile />
      <FriendsList/>
      <Statistics/>
      <Transaction/>
    </div>
  );
}

export default App;
