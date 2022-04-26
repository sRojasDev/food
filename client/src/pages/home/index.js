import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { getAllrecipes, orderAlpha} from '../../redux/actions';
import Card from '../../components/card/gameCard.js';
import Cards from '../../components/Cards/index.js';
import Pages from "../../components/getpages/pages.js";
import { NotFound } from "../../components/notFound.js";


export  const Home= ()=>{
    const recipesList= useSelector(state=>state.filterRecipes);
    let esperandoF= useSelector((state) => state.esperandoFiltro);

    const actionsObj={
        "All": getAllrecipes()
    }

    const dispat2=useDispatch();
    // useEffect(() => {
    //     console.log("run dipatch en home")
    // },[dispat2]);
    const H0me=styled.div`
    color: #c9ab85;
    background: #333;
    padding:1%;
    min-height: 96vh;
    ` 
    const RCTzone=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,3fr));
    text-align: center;
    color: #c9ab85;
    background: #333;
    padding:1%;
    overflow-y: hidden;
    
    `
    const ButtonFilt=styled.button`
    display: flex;
    padding: 0.3em 0.8em;
    color: #c9ab85;
    background: #333;
    border: 1px solid ;
    border-radius: 3px;
    `
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)  
    const indexLastRecipe = currentPage * recipesPerPage 
    const indexFirstRecipe = indexLastRecipe - recipesPerPage

    const currentRecipes = recipesList.length && recipesList.slice(indexFirstRecipe, indexLastRecipe);

    function pagination(pageNumber) {
    setCurrentPage(pageNumber)
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        !recipesList.length && !esperandoF ?dispat2(getAllrecipes()): console.log("ya se cargaron las recetas");
            setLoading(false);
        },[recipesList.length]);

    const handleClick= (e)=>{
        e.preventDefault();
        dispat2(actionsObj[e.target.name])
    }
    const handleOrder=(e)=>{
        e.preventDefault();
        dispat2(orderAlpha(e.target.name))
    }

    while(!recipesList.length|| loading) {
            return (
            <div className="bg">
                <NotFound/>
                
            </div> 
            )
    }

    return (<H0me>Hi  i am HOME
            <Pages
            recipesPerPage={recipesPerPage}
            videogames={recipesList.length}
            pagination={pagination}
            />
            <ButtonFilt name='Z-A' onClick={handleOrder} >Order Z to A</ButtonFilt>
            <ButtonFilt name='All' onClick={handleClick} >Filters out</ButtonFilt>
        <RCTzone>
            {
                recipesList.length && currentRecipes?.map((e)=>{
                    return <Card 
                    name={e.title|| e.name}
                    diets={e.diets.map(e => e.name)}
                    img={e.image}
                    id={e.id}
                    key={e.id}
                    />
                })
                
                }) 
        </RCTzone>         
        
    </H0me>)
}