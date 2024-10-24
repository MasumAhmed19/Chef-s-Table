import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipies = ({addRecipeQueue}) => {
    const [recipies, setRecipies] =useState([])

    useEffect(()=>{
        fetch('./recipies.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    }, [])

    return (
        <div className="md:w-3/5">
            <div className="grid lg:grid-cols-2 gap-8">
                {
                    recipies.map(recipe=>(
                        <Recipe addRecipeQueue={addRecipeQueue} key={recipe.recipe_id} recipe={recipe} />
                    ))
                }
            </div>

        </div>
    );
};

export default Recipies;