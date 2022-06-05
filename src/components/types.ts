export type Category = {
  id: number;
  name: string;
  description?: string;
  translatedName: string | null;
};

export type Article = {
  articleCode: string;
  title: string;
  bannerUrl?: string;
  releasedTime: number;
  content: string;
  id: string;
  category?: Category;
};
