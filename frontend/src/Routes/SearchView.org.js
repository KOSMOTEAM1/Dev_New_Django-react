import PropTypes from "prop-types";

import TestModal from "../Components/Modal/TestModal";
//import DataVisual from "../Components/Graph/Table";
function SearchView(id, coverImg, title, summary, genres) {
  console.log(coverImg);
  console.log(title);
  return (
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div className="product__item">
        {/* <div className="product__item__pic set-bg"> */}

        <img src={coverImg} alt={title} />

        <TestModal
          title={title}
          id={id}
          summary={summary}
          genres={genres}
          coverImg={coverImg}
        />

        {/* <Link to={`/movie/${id}`}> */}

        {/* </Link> */}

        {/* <p>{summary}</p>
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul> */}
      </div>
    </div>
  );
}

SearchView.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
};

export default SearchView;
