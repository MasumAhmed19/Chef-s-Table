import { useState } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import OurRecipies from './sections/OurRecipies'
import './index.css'
import Recipies from './components/Recipies'
import Sidebar from './components/Sidebar'



function App() {

  const [recipeQueue, setRecipeQueue]=useState([])
  const [addCook, setAddCook] = useState([])

  const [time, setTime] = useState(0)
  const [calories, setCalories] = useState(0)

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(el => el.recipe_id=== recipe.recipe_id)
    if(isExist){
      alert("Recipe already in a queue!")
    }else{
      setRecipeQueue([...recipeQueue, recipe])
    }
  }
  
  const handleRemove = (id)=>{
      const removeRecipe = recipeQueue.find(recipe=> recipe.recipe_id === id)
      setAddCook([...addCook, removeRecipe])

      const updateRecipe = recipeQueue.filter(recipe => recipe.recipe_id !== id)
      setRecipeQueue(updateRecipe)

      // calculate total time and calories
      setTime(time + removeRecipe.preparing_time)
      setCalories(calories + removeRecipe.calories)
      
    }
    // console.log(time)



  // console.log(recipeQueue)

  return (
    <div className='container mx-auto p-5 lexend'>
      {/* Header */}
      <Header />
      {/* Hero Banner */}
      <Hero />
      {/* Our Recipies */}
      <OurRecipies />

      <section className='flex flex-col md:flex-row gap-8'>
        {/* Recipies */}
         <Recipies addRecipeQueue={addRecipeQueue} />

        {/* Sidebar */}
          <Sidebar time={time} calories={calories} addCook={addCook} handleRemove={handleRemove} recipeQueue={recipeQueue}/>
      </section>


    </div>
  )
}

export default App
