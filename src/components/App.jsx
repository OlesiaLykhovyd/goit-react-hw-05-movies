import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const Movies = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "movies-page" */)
);
const MovieDetails = lazy(() =>
  import('./MovieDetails' /* webpackChunkName: "movie-details-page" */)
);
const Cast = lazy(() =>
  import('pages/Cast' /* webpackChunkName: "movie-cast-page" */)
);
const Reviews = lazy(() =>
  import('pages/Reviews' /* webpackChunkName: "movie-reviews-page" */)
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "not-found-page" */)
);

export default function App() {
  return (
    // <Layout>
    //   <Suspense fallback={<h1>Loading...</h1>}>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/movies" element={<Movies />} />
    //       <Route path="/movies/:movieId" element={<MovieDetails />}>
    //         <Route path="cast" element={<Cast />} />
    //         <Route path="reviews" element={<Reviews />} />
    //       </Route>
    //       <Route path="*" element={<NotFoundPage />} />
    //     </Routes>
    //   </Suspense>
    // </Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
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
    </Suspense>
  );
}
