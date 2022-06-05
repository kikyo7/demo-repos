import React, { useState, useEffect } from "react";
import { useAsync } from "react-use";
import { Article, Category } from "../components/types";

export const useArticleData = () => {};
/**
 *
 * @param fetchPinnedPosts
 */
export const usePinnedPost = (
  fetchPinnedPosts: (...args: any) => any,
  pinnedPostArgs?: any,
  ...deps: any
) => {
  let pinnedPosts: Article[] = [];

  const fetchData = pinnedPostArgs
    ? fetchPinnedPosts({ ...pinnedPostArgs })
    : fetchPinnedPosts();
  pinnedPosts = fetchData.pinnedPosts;

  useEffect(() => {
    const fetch = () => {
      try {
        const res = pinnedPostArgs
          ? fetchPinnedPosts({ ...pinnedPostArgs })
          : fetchPinnedPosts();
        pinnedPosts = res.pinnedPosts;
      } catch (e) {}
    };
    fetch();
  }, [pinnedPostArgs, fetchPinnedPosts, deps]);

  return {
    pinnedPosts: pinnedPosts,
  };
};

/**
 *
 * @param fetchCategories
 * @param categoryAll
 * @param categroyArgs
 * @param categoryId
 * @param deps
 * @returns
 */
export const useCategories = (
  fetchCategories: (...args: any) => any,
  categoryAll: Category,
  categroyArgs?: any,
  categoryId?: number,
  ...deps: any
) => {
  const [activeId, setActiveId] = useState<number | undefined>(categoryId);
  let categories: Category[] = [];
  let loading = false;

  const fetchData = categroyArgs
    ? fetchCategories({ ...categroyArgs })
    : fetchCategories();

  categories = fetchData.categories;

  const onClickCategory = (categoryId: number) => {
    setActiveId(categoryId);
  };

  useEffect(() => {
    const fetchData = () => {
      loading = true;
      try {
        const res = categroyArgs
          ? fetchCategories({ ...categroyArgs })
          : fetchCategories();
        categories = res.categories;
        loading = false;
      } catch (e) {
        loading = false;
      }
    };
    fetchData();
  }, [categroyArgs, fetchCategories]);

  return {
    cateLoading: loading,
    categories,
    activeCategoryId: activeId,
    onClickCategory,
  };
};

/**
 *
 * @param fetchArticleList
 * @param activeCategoryId
 * @returns
 */
export const useArticles = (
  fetchArticleList: (...args: any) => any,
  activeCategoryId?: number,
  articleArgs?: any
) => {
  const [articles, setArticles] = useState<Article[]>([]);
  let loading = false;

  useEffect(() => {
    const data = articleArgs
      ? fetchArticleList({ ...articleArgs })
      : fetchArticleList();
    setArticles(data.articles);
  }, [activeCategoryId, articleArgs, fetchArticleList]);

  const hasMore = true;

  const loadMore = async ({ ...params }) => {
    const res = await fetchArticleList({
      ...params,
    });
    return { data: res };
  };

  return {
    isLoading: loading,
    articles,
    hasMore,
    loadMore,
  };
};
