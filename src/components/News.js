import axios from "axios";
import { useEffect, useState } from "react";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const API_KEY = "892ddf431ec342a785409231ebfc6362";

// console.log(process.env.REACT_APP_API_KEY);

export default function News(props) {
  let { pageSize, country, category } = props;

  // let params = useParams();
  // const category = params.category;

  console.log(category);

  const [page, setpage] = useState(1);
  const [Data, setData] = useState([]); // data from api initial state
  const [isLoading, setIsLoading] = useState(); // loading state

  var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}&category=${category}`;
  console.log(url);

  const fetchData = async (url) => {
    setIsLoading(true); // set loading state
    const result = await axios(url); // get data from api
    setData(result.data.articles); // set data from api
    setIsLoading(false); // set loading state
  };
  useEffect(() => {
    fetchData(url);
  }, [category]); // run this function when category changes

  async function handleNextClick() {
    // console.log("++");
    let url_1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${
      page + 1
    }&pageSize=${pageSize}&category=${category}`;

    fetchData(url_1);
    setpage(page + 1);
  }
  async function handlePrevClick() {
    // console.log("--");
    let url_1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${
      page - 1
    }&pageSize=${pageSize}&category=${category}`;
    fetchData(url_1);
    setpage(page - 1);
  }

  console.log(page);
  console.log(Data);
  let maxPages = Math.ceil(Data.length / pageSize);
  const ok = (
    <div className="row justify-content-center">
      {!isLoading &&
        Data.map((item, index) => {
          return <NewsCard key={index} item={item}></NewsCard>;
        })}
    </div>
  );
  return (
    <div className="container-fluid">
      {/* {!(isLoading)} && <h1 className='text-center fw-fw-bolder'> {(category) ? category.toUpperCase() : "NULL"} - News</h1> */}
      {isLoading && <Spinners />}
      {ok}
      {/* next prev buttons */}

      <div className="container-sm">
        {/* right align next , left align prev button */}
        <div className="row justify-content-center">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark w-25 mx-5 my-3"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark w-25 mx-5 my-3"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "technology",
};
