import React from "react";
import { Article } from "./types";

type Props = {
  pinnedPosts: Article[];
  maxTitleRow?: number;
  maxContentRow?: number;
};

const PinnedPosts: React.FC<Props> = (props) => {
  const { pinnedPosts, maxTitleRow = 3, maxContentRow = 3 } = props;

  return (
    <div>
      {pinnedPosts.map((p) => (
        <div id={p.id}>
          <span>{p.title}</span>
          <span>{p.content}</span>
        </div>
      ))}
    </div>
  );
};

export default PinnedPosts;
