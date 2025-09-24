import AlphaCentauri from './pages/AlphaCentauri.jsx';
import Stars from './pages/Stars.jsx';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import SingleStar from './pages/SingleStar.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Stars />} />
        <Route path='/alpha-centauri' element={<AlphaCentauri />} />
        <Route path='/star/:slug' element={<SingleStar />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
