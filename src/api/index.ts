const MOCK_ARTICLES_0 = [
  {
    articleCode: "1",
    title: "test article 1",
    bannerUrl: "",
    releasedTime: 0,
    content: "test",
    id: "1",
    category: {
      id: 0,
      name: "test",
      translatedName: null,
    },
  },
];

const MOCK_ARTICLES_1 = [
  {
    articleCode: "2",
    title: "test article 2",
    bannerUrl: "",
    releasedTime: 0,
    content: "test2",
    id: "2",
    category: {
      id: 1,
      name: "test1",
      translatedName: null,
    },
  },
];

const MOCK_CATEGORIES = [
  {
    id: 0,
    name: "test",
    translatedName: null,
  },
  {
    id: 1,
    name: "test1",
    translatedName: null,
  },
];

const MOCK_PINNEDPOSTS = [
  {
    articleCode: "1",
    title: "test article 1",
    bannerUrl: "",
    releasedTime: 0,
    content: "test",
    id: "1",
    category: {
      id: 0,
      name: "test",
      translatedName: null,
    },
  },
];

// users can write api functions
export const fetchArticleList = (params: any) => {
  try {
    // const res = await get(url, params);
    // const { error, data } = res;
    return {
      articles:
        params.activeCategoryId === 0 ? MOCK_ARTICLES_0 : MOCK_ARTICLES_1,
      topArticles: [],
      total: 10,
    };
  } catch (e) {
    return {
      articles: [],
      topArticles: [],
      total: 0,
    };
  }
};

export const fetchCategories = () => {
  try {
    // const res = await get(url);
    // const { error, data } = res;
    return {
      categories: MOCK_CATEGORIES,
    };
  } catch (e) {
    return {
      categories: [],
    };
  }
};

export const fetchPinnedPosts = () => {
  try {
    // const res = await get(url);
    // const { error, data } = res;
    return {
      pinnedPosts: MOCK_PINNEDPOSTS,
    };
  } catch (e) {
    return {
      pinnedPosts: [],
    };
  }
};
