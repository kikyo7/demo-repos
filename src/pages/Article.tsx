import React from "react";
import ArticleHeader from "../components/ArticleHeader";
import Categories from "../components/Categories";
import PinnedPosts from "../components/PinnedPosts";
import Articles from "../components/Articles";
import { fetchArticleList, fetchCategories, fetchPinnedPosts } from "../api";
import {
  usePinnedPost,
  useCategories,
  useArticles,
} from "../hooks/useArticles";
import { Category } from "../components/types";

type Props = {
  title: string;
  subtitle: string;
  link?: string;
  maxTitleRow?: number;
  maxContentRow?: number;
};

const Article: React.FC<Props> = (props) => {
  const {
    title,
    subtitle,
    link = "",
    maxTitleRow = 3,
    maxContentRow = 3,
  } = props;

  const categroyAll: Category = {
    id: -1,
    name: "All",
    translatedName: null,
  };

  const { pinnedPosts } = usePinnedPost(fetchPinnedPosts);
  const { categories, activeCategoryId, onClickCategory } = useCategories(
    fetchCategories,
    categroyAll
  );

  const { isLoading, articles, hasMore, loadMore } = useArticles(
    fetchArticleList,
    activeCategoryId,
    {
      activeCategoryId,
    }
  );

  return (
    <div>
      <div>
        <ArticleHeader title={title} subtitle={subtitle} link={link} />
      </div>
      <br />
      <b>PinnedPosts</b>
      <div>
        <PinnedPosts
          pinnedPosts={pinnedPosts}
          maxTitleRow={maxTitleRow}
          maxContentRow={maxContentRow}
        />
      </div>
      <br />
      <b>Categories</b>
      <div>
        <Categories
          categories={categories}
          activeCategoryId={activeCategoryId}
          onChangeCategory={onClickCategory}
        />
        <br />
        <b>Articles</b>
        <Articles isLoading={isLoading} articles={articles} hasMore={hasMore} />
      </div>
    </div>
  );
};

export default Article;
