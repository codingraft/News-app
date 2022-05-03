import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResult, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md" className="newsContent">
      <div className="content">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResult && (
          <>
            <hr />
            <button
              className="loadmore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              load more
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
