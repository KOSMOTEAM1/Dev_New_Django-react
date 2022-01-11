import { useState, useEffect } from "react";
import MovieLike from "../Components/Movie/MovieLike";
import MovieRecommand from "../Components/Movie/MovieRecommand";
import MovieLatest from "../Components/Movie/MovieLatest";
import SearchBar from "../Components/Search/SearchBar";
//import TestModal from "../Components/TestModal";
//import { Button } from "react-bootstrap";
//import TestModal from "../Components/TestModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../source/css/bootstrap.min.css";
import ReactTable from "../Components/Graph/ReactTable";

function Home() {
  //loading의 변화를 setloading에 저장, useState는 loading의 초기값 설정
  const [totalmovies, setTotalMovies] = useState([]);
  const [latestmovies, setLatestMovies] = useState([]);
  const [likemovies, setLikeMovies] = useState([]);
  const [recmovies, setRecMovies] = useState([]);

  //검색을 위한 전체 영화 DB 불러오기
  const getMoviesTotal = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setTotalMovies(json.data.movies);
  };
  useEffect(() => {
    getMoviesTotal();
  }, []);
  console.log(totalmovies);

  //최신영화 호출
  const getMoviesLatest = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setLatestMovies(json.data.movies);
  };
  useEffect(() => {
    getMoviesLatest();
  }, []);

  //찜한영화 호출
  const getMoviesLike = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setLikeMovies(json.data.movies);
  };
  useEffect(() => {
    getMoviesLike();
  }, []);

  //추천영화 호출
  const getMoviesRecommand = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setRecMovies(json.data.movies);
  };
  useEffect(() => {
    getMoviesRecommand();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  //console.log(movies);
  return (
    <section class="product spad">
      {/* <Search /> */}

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              {/* <Search /> */}
              <ReactTable />
              <SearchBar placeholder="Search here" data={totalmovies} />
            </div>
            <div class="top_contents">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>추천 작품</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="product__item">
                    <Slider {...settings}>
                      {recmovies.map((movie) => (
                        <MovieRecommand
                          key={movie.id}
                          id={movie.id}
                          coverImg={movie.medium_cover_image}
                          title={movie.title}
                          summary={movie.summary}
                          genres={movie.genres}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div class="top_contents">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>최신 작품</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 ">
                  <div class="product__item">
                    <Slider {...settings}>
                      {latestmovies.map((movie) => (
                        <MovieLatest
                          key={movie.id}
                          id={movie.id}
                          coverImg={movie.medium_cover_image}
                          title={movie.title}
                          summary={movie.summary}
                          genres={movie.genres}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div class="top_contents">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>내가 찜한 작품</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="product__item">
                    <Slider {...settings}>
                      {likemovies.map((movie) => (
                        <MovieLike
                          key={movie.id}
                          id={movie.id}
                          coverImg={movie.medium_cover_image}
                          title={movie.title}
                          summary={movie.summary}
                          genres={movie.genres}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
//url에 영화 정보 보기위한 id parameter 추가
