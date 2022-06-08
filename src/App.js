import { Routes, Route } from 'react-router-dom';
import { Bookmarks, Home, Movies, SignUp, TvSeries } from './pages';
import LogIn from './pages/LogIn/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;
