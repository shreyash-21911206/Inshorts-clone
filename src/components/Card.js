import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard";
import "./card.css";

const Card = ({ newsArray, loadMore, setLoadMore, newsResults, category}) => {
  return (
    <Container maxWidth="md">
      <div className="content">

        <div><h3>{category.toUpperCase().replace("_", " ")}</h3></div>

        {/* First this */}
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {/* Then this */}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Card;