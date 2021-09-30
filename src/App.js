import './App.css';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/Statistics.json';
import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';
import TransactionHistory from './components/Transaction/Transaction';
import transactions from './components/Transaction/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
