import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Route ,Routes } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import { Link } from 'react-router-dom';
import ChannelList from './components/channelList/channelList';
import ShowList from './components/ShowList/ShowList';

function App() {console.log('app render');
  return (
    <div className="App">
      
      
     <BrowserRouter>
       <Header />
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="show/:id" element={<h1>Show detail page</h1>}></Route>
          <Route path="shows/:stationId" element={<ShowList />}></Route>
          <Route path="shows" element={<ChannelList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
