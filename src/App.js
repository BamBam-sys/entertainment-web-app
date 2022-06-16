import { Routes, Route } from 'react-router-dom';
import { Bookmarks, ErrorPage, Home, Movies, SignUp, TvSeries } from './pages';
import LogIn from './pages/LogIn/LogIn';

import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
