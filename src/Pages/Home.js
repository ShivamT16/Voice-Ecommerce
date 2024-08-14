import { useContext } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import { ProductContext } from "..";

export const Home = ({ categories }) => {
  const { handleCategory } = useContext(ProductContext);

  return (
    <div className="Home">

      {categories.map((item) => {
        const { _id, category, imageLink } = item;
        return (
          <div key={_id} onClick={() => handleCategory(category)}>
            <Link className="link" to="/category">
              <img src={imageLink} alt={category} />
              <p> {category} </p>
            </Link>
          </div>
        );
      })}
      
    </div>
  );
};
