import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import TestModal from "../Modal/TestModal";

function Movie({ id, title }) {
  //최신영화 호출
  const [koreamovies, setkoreaMovies] = useState([]);

  const getMovieskorea = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/apimovie/${id}`)
    ).json();

    setkoreaMovies(json);
    //console.log(json);
  };
  useEffect(() => {
    getMovieskorea();
  }, []);

  return (
    <div className="product__item__text">
      <TestModal
        key={koreamovies.otteid}
        title={koreamovies.title}
        id={koreamovies.otteid}
        summary={koreamovies.overview}
        coverImg={koreamovies.poster_path}
      />

      {/* <TestModal title={title} id={id} /> */}

      {/* <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul> */}
    </div>
  );
}

{
  /* <MovieLatest
  key={movie.id}
  id={movie.id}
  coverImg={movie.medium_cover_image}
  title={movie.title}
  summary={movie.summary}
  genres={movie.genres}
/>; */
}
/*{genres.map((g) => <li key={g}>{g}</li>)}</ul> 안됨
  {genres && genres.map((g) => <li key={g}>{g}</li>)}</ul> 가능
  React는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행함, 즉 react는 return에서
  xxx.map을 반복실행할떄, 첫 턴에 데이터가 안들어와도 렌더링이 실행 되버림
  {true && expression} 항상 expression
  {false && expression} 항상 false
*/
// 주소에 parameter를 받고 싶을때는 "" 대신 `` 사용해야함

//우리가 어떤 props을 가지고 있는지 선언/ 위에는 props을 받기 위한 코드
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
};

export default Movie;
