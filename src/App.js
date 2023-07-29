import {  Routes, Route} from 'react-router-dom';
import AppMain from './components/AppMain/AppMain';
import "./style/global.css";


function App() {
  return (
        <Routes>
          <Route index path="/react-redux-jsonplaceholder/page/:countPage" element={<AppMain />} />
          <Route path="/react-redux-jsonplaceholder" element={<AppMain  />} />
        </Routes>
  );
}

export default App;
