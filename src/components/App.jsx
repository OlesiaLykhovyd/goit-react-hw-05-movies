import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import NotFoundPage from 'pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
