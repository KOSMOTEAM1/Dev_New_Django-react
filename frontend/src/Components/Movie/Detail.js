import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LineChart from "../Graph/LineChart";
import HeartButton from "../Modal/HeartButton";
import PropTypes from "prop-types";
import "../../source/css/bootstrap.min.css";
import "../Modal/modal.css";

function Detail({
  title,
  coverImg,
  id,
  summary,
  release,
  runtime,
  naver,
  imdb,
  nation,
}) {
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  //장르
  const getGenre = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/apimovie/genre/${id}`)
    ).json();
    const jsonarray = [];
    for (let i = 0; i < json.length; i++) {
      jsonarray.push(json[i].name);
    }
    setGenres(jsonarray);
    console.log(jsonarray);
  };
  useEffect(() => {
    getGenre();
  }, []);

  //배우
  const getActor = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/apimovie/actor/${id}`)
    ).json();
    const jsonarray = [];
    for (let i = 0; i < json.length; i++) {
      jsonarray.push(json[i].personname);
    }
    setActors(jsonarray);
    console.log(jsonarray);
  };
  useEffect(() => {
    getActor();
  }, []);

  //감독
  const getDirector = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/apimovie/director/${id}`)
    ).json();
    const jsonarray = [];
    for (let i = 0; i < json.length; i++) {
      jsonarray.push(json[i].personname);
    }
    setDirectors(jsonarray);
    console.log(jsonarray);
  };
  useEffect(() => {
    getDirector();
  }, []);

  return (
    <section className="anime-details spad">
      <div class="container">
        <div class="anime__details__content">
          <div class="anime__details__text">
            <div class="anime__details__title">
              <h3>{title}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5">
              <div class="anime__details__pic">
                <img
                  src={`https://image.tmdb.org/t/p/original/${coverImg}`}
                  alt={title}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div class="anime__details__title">
                <br></br>
                <h5>검색량 변화</h5>
                <div className="anime__details__graph">
                  <LineChart title={title} />
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="row">
                <div className="anime__details__widget">
                  <div className="col-lg-6 col-md-6 ">
                    <ul>
                      <li>
                        <span>장르 : </span>
                        {genres && genres.map((g) => <li key={g}>{g}</li>)}
                      </li>
                      <li>
                        <span>감독 : </span>
                        {directors &&
                          directors.map((d) => <li key={d}>{d}</li>)}
                      </li>
                      <li>
                        <span>배우 : </span>
                        {actors && actors.map((a) => <li key={a}>{a}</li>)}
                      </li>
                      <li>
                        <span>개봉일 : </span> {release}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <span>상영시간 : </span>
                        {runtime}
                      </li>
                      <li>
                        <span>Naver 평점 : </span> {naver}
                      </li>
                      <li>
                        <span>IMDB 평점 : </span> {imdb}
                      </li>
                      <li>
                        <span>언어 : </span> {nation}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div class="anime__details__text">
                <h5>줄거리</h5>
                <p>{summary}</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </section>
    //
  );
}

Detail.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
// };

// const [like, setLike] = useState();

// useEffect(async () => {
//   const fetchData = async () => { const res = await axios.get(...)
//      if (res.data.type === 'liked') setLike(true)
//     }
//     fetchData()
//   }, []);
//   const toggleLike = async (e) => {
//     const res = await axios.post(...)
//     setLike(!like)
//   }
// [POST] 사용자가 좋아요를 누름 -> DB 갱신 setLike(!like) }

export default Detail;
