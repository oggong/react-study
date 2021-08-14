import logo from './logo.svg';
import './App.css';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="dd4ed8c5-1692-44dc-bde3-ab3cb9198b90"
      userName="javascriptmastery"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
