import React from 'react'



function NewsCard(props) {
  return (<div className="col-md-3 m-4 p-2">
    <div className="card border border-dark border-3 ">

      <a rel="noreferrer" href={props.item.url} target="_blank" className="bg-dark thumbnail">
        <img src={props.item.urlToImage ? props.item.urlToImage : "https://source.unsplash.com/random"} className="card-img-top border rounded-5" alt={props.item.title} width={300} height={250} />
      </a>
      <div className="card-body">
        <h5 className="card-title fw-bold fs-5">{props.item.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger comeout">
            {props.item.source.name}
          </span>
        </h5>
        <span class="badge bg-warning text-white text-dark text-end">{props.item.source.name}</span>

        <p className="card-text fs-6">{props.item.description ? props.item.description.slice(0, 145) + "..." : "NULL"}</p>
        {
          /* Author */
        }
        <p className="card-text text-end fw-bold text-primary"> ~ {props.item.author ? props.item.author : "Anonymous"}</p>
        {
          /* publishedAt */
        }
        <p className="card-text text-end fw-bold text-warning"> {props.item.publishedAt ? Date(props.item.publishedAt).slice(0, 10) + "," + Date(props.item.publishedAt).slice(11, 16) : "NULL"}</p>
        {
          /* time */
        }

        <div className="text-center">
          <a rel="noreferrer" href={props.item.url} target="_blank" className="btn btn-danger thumbnail">Read more</a>
        </div>
      </div>
    </div>
  </div>);
}

export default NewsCard