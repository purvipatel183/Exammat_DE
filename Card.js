import React from "react";

const Card = (props) => {
  return (
    <>
      <div class="card" style={{width: 14+'rem',margin:10+'px'}}>
        <img src={props.img_Link} class="card-img-top" alt={props.alternative} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.content}
          </p>
          <a href={props.Download_Link} class="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
