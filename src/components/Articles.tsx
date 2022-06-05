import React, { useState } from "react";
import { Article } from "./types";

type Props = {
  isLoading: boolean;
  articles: Article[];
  hasMore: boolean;
};

const Articles: React.FC<Props> = (props) => {
  const { isLoading, articles, hasMore } = props;

  return (
    <>
      {articles.map((a) => (
        <div key={a.id}>
          <div>{a.title}</div>
          <div>{a.content}</div>
        </div>
      ))}
    </>
  );
};

export default Articles;
