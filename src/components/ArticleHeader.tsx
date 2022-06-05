import React from "react";

type Props = {
  title: string;
  subtitle: string;
  link?: string;
};

const ArticleHeader: React.FC<Props> = (props) => {
  const { title, subtitle, link = "/" } = props;

  return (
    <div>
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

export default ArticleHeader;
