import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LineChart from "../Graph/LineChart";
import HeartButton from "../Modal/HeartButton";
import "../../source/css/bootstrap.min.css";
import "../Modal/modal.css";

function Detail({ title, coverImg, id, summary, genres }) {
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
                  <LineChart id={id} />
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
                        <span>Type: </span> {title}
                      </li>
                      <li>
                        <span>Genre: </span>{" "}
                        {genres && genres.map((g) => <li key={g}>{g}</li>)}
                      </li>
                      <li>
                        <span>Nation: </span> {title}
                      </li>
                      <li>
                        <span>서비스중인 OTT: </span> {title}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <span>Type: </span> {title}
                      </li>
                      <li>
                        <span>Genre: </span>{" "}
                        {genres && genres.map((g) => <li key={g}>{g}</li>)}
                      </li>
                      <li>
                        <span>Nation: </span> {title}
                      </li>
                      <li>
                        <span>서비스중인 OTT: </span> {title}
                      </li>
                    </ul>
                  </div>
                </div>
                <HeartButton />
                {/* <HeartButton like={like} onClick={toggleLike}/> */}
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

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
// };

export default Detail;
