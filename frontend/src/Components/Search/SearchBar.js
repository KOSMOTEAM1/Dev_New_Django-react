import React, { useState } from "react";
import SearchModal from "../Modal/SearchModal";
import PropTypes from "prop-types";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  //검색 자동완성
  //참고자료 Search Bar in React Tutorial - Cool Search Filter Tutorial : https://www.youtube.com/watch?v=x7niho285qs&t=0s
  const handleFilter = (event) => {
    var text = "";
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  console.log(filteredData);
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <form className="search-model-form">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </form>

      {filteredData.length !== 0 && (
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div class="product__page__title">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                      <div class="section-title">
                        <h4>검색 결과</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* 검색된 자료들 모달로 호출 */}
            {filteredData.map((value) => {
              return (
                <div className="col-lg-3">
                  <SearchModal
                    id={value.otteid}
                    coverImg={value.poster_path}
                    title={value.title}
                    summary={value.overview}
                    release={value.release_date}
                    runtime={value.runtime}
                    naver={value.naverid}
                    imdb={value.imdbscore}
                    nation={value.original_language}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default SearchBar;
