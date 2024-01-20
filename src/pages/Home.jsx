// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { useEffect, useState } from 'react';
// import { fetchTrending } from 'services/api';

import { CarsList } from 'components/CarsList/CarsList';
import { Container } from 'components/Container';

export const Home = () => {
  //   const [trending, setTrending] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const getTrending = async () => {
  //       try {
  //         setLoading(true);
  //         const { results } = await fetchTrending();
  //         setTrending(results);
  //       } catch (error) {
  //         console.log('error', error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     getTrending();
  //   }, []);

  return (
    <Container>
      <h1>Car rental</h1>
      <CarsList />
      {/* {loading && <h2>Loading...</h2>}
      <MoviesList moviesList={trending} /> */}
    </Container>
  );
};
