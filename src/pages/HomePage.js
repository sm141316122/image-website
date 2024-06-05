import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Image from "../components/Image";
import axios from "axios";

const HomePage = () => {
  const [images, setImg] = useState(null);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [currentSearch, setSearch] = useState("");
  const per_page = 15;
  const apiKey = "hwMWX1kRjJhqLb7jWrFkKGktIBi0QhegXF9Owh8yWpAbNmizsRK8XTYY";
  const imageURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=${per_page}`;
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&${page}&per_page=${per_page}`;

  const searchImg = async (url) => {
    let result = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    setImg(result.data.photos);
    setSearch(input);
  };

  const morePicture = async () => {
    setPage(page + 1);
    let result;
    if (currentSearch == "") {
      result = await axios.get(
        `https://api.pexels.com/v1/curated?page=${
          page + 1
        }&per_page=${per_page}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
    } else {
      result = await axios.get(
        `https://api.pexels.com/v1/search?query=${currentSearch}&page=${
          page + 1
        }&per_page=${per_page}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
    }
    setImg(images.concat(result.data.photos));
  };

  useEffect(() => {
    searchImg(imageURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchImg={() => {
          searchImg(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {images &&
          images.map((img, index) => {
            return <Image imgInfo={img} key={index} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default HomePage;
