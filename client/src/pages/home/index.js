import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { getAllrecipes, orderAlpha, filterByType, orderScore, loadTypes} from '../../redux/actions';
import Card from '../../components/card/gameCard.js';
import Cards from '../../components/Cards/index.js';
import Pages from "../../components/getpages/pages.js";
import { NotFound } from "../../components/notFound.js";


export  const Home= ()=>{
    const recipesList= useSelector(state=>state.filterRecipes);
    let esperandoF= useSelector((state) => state.esperandoFiltro);
    const dietas= useSelector((state) =>state.types);

    const actionsObj={
        "All": getAllrecipes(),
    }

    const dispat2=useDispatch();
    useEffect(() => {
        console.log("run dipatch en home")
    },[dispat2]);
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
    max-width: 130px;
    margin-top:0.5%;
    margin-left:3%;
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
        !recipesList.length && !esperandoF ?dispat2(getAllrecipes()): dispat2(loadTypes());
        console.log(recipesList);
        if(recipesList.length===0){
            dispat2(getAllrecipes()) 
        }
            setLoading(false);
        },[recipesList.length]);

    const handleClick= (e)=>{
        e.preventDefault();
        dispat2(actionsObj[e.target.name])
    }
    const handleSelect= (e)=>{
        e.preventDefault();
        dispat2(filterByType(e.target.value))
    }
    const handleOrder=(e)=>{
        e.preventDefault();
        dispat2(orderAlpha(e.target.name))
    }
    const handleOrderSc=(e)=>{
        e.preventDefault();
        dispat2(orderScore(e.target.name))
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
            
            <select name="type" onChange={e => handleSelect(e)}>
            <option value="All">Todos los tipos</option>
                {
                    dietas.length && dietas?.map(el=>{
                        return <option name={"type"} value={el.name}  > {el.name} </option>
                    })
                }
            </select>
            <RCTzone>
            <ButtonFilt name='Top' onClick={handleOrderSc} >Top Score</ButtonFilt>
            <ButtonFilt name='Less' onClick={handleOrderSc} >Less Score</ButtonFilt>
            <ButtonFilt name='A-Z' onClick={handleOrder} >Order A to Z</ButtonFilt>
            <ButtonFilt name='Z-A' onClick={handleOrder} >Order Z to A</ButtonFilt>
            <ButtonFilt name='All' onClick={handleClick} >Filters out</ButtonFilt>
            </RCTzone>
        <RCTzone>
            {
                recipesList.length && currentRecipes?.map((e)=>{
                    return <Card 
                    name={e.title|| e.name}
                    diets={e.diets.map(e => e.name)}
                    img={e.image}
                    id={e.id}
                    key={e.id}
                    score={e.score}
                    />
                })
                
                }) 
        </RCTzone>         
        
    </H0me>)
}