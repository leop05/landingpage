import React from "react";
import "./categories.css";


function Categories({title, description, image, categories}) 

{
 

  return (
    <section className="categories">
      <h2>Applications principales</h2>
      <div className="categories-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-card" id={cat.id}>
            <h3>{cat.title}</h3>
            
            <p>{cat.description}</p>
            <img classname="images" src={cat.image}/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
