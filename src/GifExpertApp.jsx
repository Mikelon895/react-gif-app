import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>

        <h1>Buscador de gifs</h1>

        <AddCategory onNewCategory={(value) => onAddCategory(value)} />      
        
        {
            categories.map((cat) => (
                <GifGrid 
                    key={ cat } 
                    category={cat}
                />)
            )
        }
        
      
    </>
  );
};
