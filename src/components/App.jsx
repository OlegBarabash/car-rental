import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from 'Layout';
import { Cars } from 'pages/Cars';
import { Selected } from 'pages/Selected';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Cars />} />
          <Route path="favorites" element={<Selected />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
