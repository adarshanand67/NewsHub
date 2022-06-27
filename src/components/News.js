import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinners from './Spinners';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const API_KEY = "892ddf431ec342a785409231ebfc6362";
// REACT_APP_API_KEY = "892ddf431ec342a785409231ebfc6362"

// console.log(process.env.REACT_APP_API_KEY);


export default function News(props) {

  let { pageSize, country } = props;

  let params = useParams();
  const category = params.category;

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
  }
  useEffect(() => {
    fetchData(url);
  }, [category]); // run this function when category changes

  async function handleNextClick() {
    // console.log("++");
    let url_1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${page + 1}&pageSize=${pageSize}&category=${category}`;

    fetchData(url_1);
    setpage(page + 1);
  }
  async function handlePrevClick() {
    // console.log("--");
    let url_1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${page - 1}&pageSize=${pageSize}&category=${category}`;
    fetchData(url_1);
    setpage(page - 1);
  }


  console.log(page);
  console.log(Data);
  let maxPages = Math.ceil(Data.length / pageSize);
  return (
    <div className='container-fluid'>
      <h1 className='text-center fw-fw-bolder'> {category.toUpperCase()} - News</h1>
      {isLoading && <Spinners />}
      <div className="row justify-content-center">
        {
          !(isLoading) && Data.map((item, index) => {
            return (
              <div className="col-md-3 m-4 p-2" key={index}>
                <div className="card border border-dark border-3 " >

                  <a rel="noreferrer" href={item.url} target="_blank" className="bg-dark thumbnail">
                  <img src={(item.urlToImage) ? (item.urlToImage) : "https://source.unsplash.com/random"} className="card-img-top border rounded-5" alt={item.title} width={300} height={250} />

                  </a>
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-5">{item.title}
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger comeout">
                        {item.source.name}
                      </span>
                    </h5>
                    <span class="badge bg-warning text-white text-dark text-end">{item.source.name}</span>

                    <p className="card-text fs-6">{(item.description) ? item.description.slice(0, 145) + "..." : "NULL"}</p>
                    {/* Author */}
                    <p className="card-text text-end fw-bold text-primary"> ~ {(item.author) ? item.author : "Anonymous"}</p>
                    {/* publishedAt */}
                    <p className="card-text text-end fw-bold text-warning"> {(item.publishedAt) ? Date(item.publishedAt).slice(0, 10) + "," +Date(item.publishedAt).slice(11, 16) : "NULL"}</p>
                    {/* time */}

                    <div className="text-center">
                      <a rel="noreferrer" href={item.url} target="_blank" className="btn btn-danger thumbnail">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )
        }

      </div>
      {/* next prev buttons */}

      <div className="container-sm">
        {/* right align next , left align prev button */}
        <div className="row justify-content-center">
          <button disabled={page <= 1} type="button" className="btn btn-dark w-25 mx-5 my-3" onClick={handlePrevClick}> &larr;
            Previous</button>
          <button type="button" className="btn btn-dark w-25 mx-5 my-3" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </div>
  )
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "technology"
}
