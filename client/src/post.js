import React from "react";

function post() {
  return (
    <div>
      {" "}
      <div className="post">
        <div className="image">
          <img
            src="https://media.istockphoto.com/id/1173733636/photo/three-zebras.jpg?s=612x612&w=0&k=20&c=lhYWP5XkeiCWeOlG6lDHa37amGrG7W_fZFvmhV-kIyU="
            alt=""
          />
        </div>

        <div className="text">
          <h2>Lorem Ipsum is simply dummy text of the</h2>
          <p className="info">
            <a href="/" className="author">
              Isuru Sajith
            </a>
            <time>2023-01-06 16:45</time>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the e 1500s, when an unknown
            printer took a galley of type
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default post;
