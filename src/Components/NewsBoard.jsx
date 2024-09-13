import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apikey = import.meta.env.VITE_API_KEY;
    console.log(import.meta.env.VITE_API_KEY);

    // Set loading to true when starting the fetch
    setLoading(true);
    let url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      "&lang=en&country=us&max=10&apikey=" +
      apikey;

    // Use useEffect to fetch data once when the component mounts

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false); // Set loading to false when error occurs
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        {category} <span className="badge bg-danger">News</span>
      </h2>

      {/* Display loading message while fetching */}
      {loading && <p>Loading...</p>}

      {/* Display news articles only if not loading */}
      {!loading &&
        articles.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          );
        })}
    </div>
  );
};

export default NewsBoard;
