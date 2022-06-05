import React from "react";
import { Category } from "./types";

type Props = {
  categories: Category[];
  activeCategoryId?: number;
  onChangeCategory?: (categoryId: number) => void;
};

const Categories: React.FC<Props> = (props) => {
  let {
    categories,
    onChangeCategory = (categoryId: number) => {
      console.log(categoryId);
    },
  } = props;

  return (
    <>
      {categories.map((c) => (
        <div key={c.id} onClick={() => onChangeCategory(c.id)}>
          {c.name}
        </div>
      ))}
    </>
  );
};

export default Categories;
