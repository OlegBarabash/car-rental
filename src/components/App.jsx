// import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './GlobalStyle';
// import { selectCars } from 'components/redux/cars/selectors';

export const App = () => {
  return (
    <div>
      <Home />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes> */}
      <GlobalStyle />
    </div>
  );
};
