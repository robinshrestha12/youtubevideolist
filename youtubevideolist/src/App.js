import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Youtubevideolist from './youtubelist/youtubelist';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoDetail from './singlevideodetail/VideoDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='HeadText'>YouTube Video Lists</div>
        <Router>
          <Routes>
            <Route path="/video/:videoId" element={<VideoDetail />} />
            <Route path="/" element={<Youtubevideolist />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
