import { Link } from "react-router-dom"
import styled from "styled-components";
import './load.css';

export const NotFound= ()=>{
    const LoadDiv=styled.div`
    display: grid;
    padding:3%;
    grid-template-columns: repeat(auto-fit,minmax(300px,3fr));
    text-align: center;
    color: #fff;
    min-height: 88vh;
    background-image: linear-gradient( 62deg ,rgba(0,0,0)  , rgb(20, 32, 27),rgba(0,0,0),rgb(20, 32, 27) 60% );
    `
    return(<LoadDiv>
        <p>Loding ...</p>
        <div className="loadDiv"></div>
        <Link to="/"><p>SALIR</p></Link> 
    </LoadDiv>)
}