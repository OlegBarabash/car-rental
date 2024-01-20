import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from 'Layout';
import { Cars } from 'pages/Cars';
import { Selected } from 'pages/Selected';
// import { selectCars } from 'components/redux/cars/selectors';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="selected" element={<Selected />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
