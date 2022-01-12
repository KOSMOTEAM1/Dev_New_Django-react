import React, { useState, useEffect } from "react";
import TestModal from "../Components/Modal/TestModal";
import { id } from "../Components/Graph/Search"

function SearchView({id}) {
  const [searchmovies, setSearchMovies] = useState([]);

  const getMovieskorea = async () => {
    const json = await (await fetch(`http://127.0.0.1:8000/apimovie/${id}`)).json();
    // `http://127.0.0.1:8000/insertcnt/search/${id}`
    setSearchMovies(json);
    //console.log(json);
  };
  useEffect(() => {
    getMovieskorea();
  }, []);

  return (
    <section class="product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h5>검색창 들어갈 곳</h5>
            </div>
            <div class="top_contents">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>검색 결과</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="product__item">
                  {searchmovies.map((searchmovie) => (
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <TestModal
                        title={searchmovie.title}
                        id={searchmovie.otteid}
                        summary={searchmovie.overview}
                        coverImg={searchmovie.poster_path}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchView;
