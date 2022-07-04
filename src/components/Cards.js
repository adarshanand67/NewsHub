import React from "react";

function Card({ Data }) {
  return (
    <div>
      {Data.map((item, index) => {
        return (
          <div className="col-md-4 p-2" key={index}>
            <div className="card">
              <img
                src={
                  item.urlToImage
                    ? item.urlToImage
                    : "https://source.unsplash.com/random"
                }
                className="card-img-top"
                alt={item.title}
                width={300}
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text">
                  {item.description > 0
                    ? item.description.slice(0, 145) + "..."
                    : "NULL"}
                </p>
                <div className="text-center">
                  <a
                    rel="noreferrer"
                    href={item.url}
                    target="_blank"
                    className="btn btn-danger"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
