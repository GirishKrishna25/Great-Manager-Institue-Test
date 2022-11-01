import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';

export default function Carousal() {
  const [movieData, setMovieData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://greatmanagerinstitute-e7ede-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  const posters = movieData.map((movie) => {
    return movie.poster;
  });

  const trailers = movieData.map((movie) => {
    return movie.trailer;
  });

  return (
    <>
      <CarousalContainer>
        <h1>Explore</h1>
        <SlideShowContainer>
          {trailers.map((trailer) => {
            return (
              <VideoLayout>
                <YoutubeEmbed link={trailer} />
              </VideoLayout>
            );
          })}
          {/* <img
              src="https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg"
              alt="movie poster"
            />
            <img
              src="https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg"
              alt="movie poster"
            />
            <img
              src="http://media.comicbook.com/2018/02/deadpool-1080750.jpeg"
              alt="movie poster"
            />
            <img
              src="https://www.retrozap.com/wp-content/uploads/2018/05/rsz_solo-a-star-wars-story-artwork.jpg"
              alt="movie poster"
            />
            <img
              src="https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/02/1-18.jpg"
              alt="movie poster"
            /> */}
        </SlideShowContainer>
      </CarousalContainer>
    </>
  );
}

const CarousalContainer = styled.div`
  padding: 1rem 2rem;
`;

const SlideShowContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
`;

const VideoLayout = styled.div`
  margin-top: 1rem;
`;

// const Poster = styled.div`
//   // background: yellow;
//   width: 79vw;
//   height: 40vh;

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: contain;
//   }
// `;
