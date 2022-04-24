
import { useNavigate } from "react-router-dom";
import restaurant from "../../video/Restaurant.mp4";
import { useDispatch } from "react-redux";
import { loadGenres } from "../../redux/actions";
import { useEffect } from "react";
import styled from 'styled-components';
import {images} from "../../utils/images/images";
import "./landing.css";


export const Landing = () => {
    
    const dispat= useDispatch();

    useEffect(() => {
        dispat(loadGenres());
    },[dispat]);
    let navigate= useNavigate();

    const Container = styled.div`
    display:flex;
    margin: 0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-image: url(${images.menubg}) ;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 4;
    `
const Triang= styled.div`
    display:flex;
    justify-content: flex-start;
    z-index:1;
    margin-top: -100vh;
    width: 0;
    height: 0;
    border-top: 100vh solid transparent;
    border-left: 100vh solid #000;
`
const BTNopen= styled.button`
    margin-top:30%;
    background-color:#fff;
    border:3px;
    border-style: none none none dotted;
    border-color:#c9ab85;
    padding:2% 1%;
    font-family:  'Arial Narrow', Arial, sans-serif;
    color:#c9ab85;
    border-radius:50%;
    font-size:2em;
    
`
    
        return (
            <div style={{background: "rgb(2,2,2, 0.6)",}}>
                <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    left:"50%",
                    width: "50%",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: -2,
                    transform:"traslate(-50%, -30%)",
                }}
                >
                <source src={restaurant} type="video/mp4" />
            </video> 
            <Container> 
                
                <BTNopen onClick={()=>navigate("/home")} className="load" > OPEN </BTNopen>
                
            </Container>
            <Triang>

            </Triang>
            </div>
        )
}
    
export default Landing;