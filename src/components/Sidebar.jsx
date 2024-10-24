import { useState } from "react";
import NavName from "./NavName";

const Sidebar = ({recipeQueue, handleRemove, addCook, time, calories}) => {

    return (
        <section className="md:w-2/5 border-2 border-gray-300 rounded-md p-5 ">
            <div className="flex flex-col gap-2 md:sticky top-5 ">
                <h2 className="text-xl font-semibold text-center">Want to cook: {recipeQueue.length}</h2>
                <hr className="my-2 h-[10px]"/>
                {/* want to cook */}
                <div className="overflow-x-auto mb-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            recipeQueue.map((el, idx)=>(
                                <tr key={idx} className="hover">
                                    <th className="text-base">{1+idx}</th>
                                    <td className="text-base text-gray-500">{el.recipe_name}</td>
                                    <td className="text-base text-gray-500">{el.preparing_time}</td>
                                    <td className="text-base text-gray-500">{el.calories}</td>
                                    <td>
                                        <button onClick={()=>handleRemove(el.recipe_id)} className="bg-blue-700 text-white p-1 rounded-md"><NavName name="Preparing" /> </button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                        </tbody>
                    </table>
                </div>
                
                {/* currently cooking */}
                <h2 className="text-xl font-semibold text-center">Currently cooking: {addCook.length}</h2>
                <div className="overflow-x-hidden mb-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            addCook.map((el, idx)=>(
                                <tr key={idx} className="hover">
                                    <th className="text-base">{1+idx}</th>
                                    <td className="text-base text-gray-500">{el.recipe_name}</td>
                                    <td className="text-base text-gray-500">{el.preparing_time}</td>
                                    <td className="text-base text-gray-500">{el.calories}</td>
                                </tr>
                            ))
                        }
                        
                        <tr >
                            <th className="text-base"></th>
                            <td className="text-base text-gray-500"></td>
                            <td className="text-base text-gray-500">Total Time=<br/> {time} minutes</td>
                            <td className="text-base text-gray-500">Total Calorie=<br/> {calories} calories</td>
                        </tr>

                        
                        </tbody>
                    </table>
                </div>
            </div>


        </section>
    );
};

export default Sidebar;