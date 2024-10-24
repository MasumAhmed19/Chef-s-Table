import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import NavName from "./NavName";



const Recipe = ({recipe, addRecipeQueue}) => {
    // console.log(recipe)
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border-2 border-gray-300 rounded-md p-5 flex flex-col gap-2'>
            {/* <div className='h-[30vh] overflow-hidden rounded-md'> <img className='object-cover bg-center'  src={recipe_image} alt="" /> </div> */}
            <div className='h-[28vh] overflow-hidden rounded-md' style={{ backgroundImage:  `url(${recipe_image})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <h4 className='text-xl mt-3'>{recipe_name}</h4>
            <h5 className='text-base text-gray-500'>{short_description}</h5>
            <hr className="my-2" />
            <h4 className='text-lg'>Ingredients: {ingredients.length}</h4>
            <ul className='text-base text-gray-500 list-disc ml-10'>
                {
                    ingredients.map((el, idx)=>(
                        <li key={idx}>{el}</li>
                    ))
                }
            </ul>
            <hr className="my-2" />
            <div className='flex gap-5 text-base text-gray-500'>
                <span className="flex items-center gap-2"><FaRegClock />{preparing_time} minutes</span>
                <span className="flex items-center gap-2"><FaFire />{calories} calories</span>
            </div>

            <div>
                <button onClick={()=>addRecipeQueue(recipe)} className="bg-blue-700 px-5 py-2 text-white rounded-md mt-2"><NavName name="Want to Cook" /></button>
            </div>


        </div>
    );
};

export default Recipe;