import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
import TestModal from "../Modal/TestModal";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="product__item__text">
      <img src={coverImg} alt={title} />
      <h5>
        {/* <Link to={`/movie/${id}`}> */}
        <TestModal
          title={title}
          id={id}
          summary={summary}
          genres={genres}
          coverImg={coverImg}
        />
        {/* </Link> */}
      </h5>
      {/* <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul> */}
    </div>
  );
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
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
};

export default Movie;
