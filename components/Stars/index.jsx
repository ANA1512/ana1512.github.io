import React from 'react'
import Staractive from "../../assets/staractive.png"
import StarInactive from "../../assets/star-inactive.png"

function Stars(props) {

    let nbStars = props.rating; 
    console.log(nbStars)
    const maxStars = 5;
    const stars = []; 
     
  for (let i = 1; i < maxStars + 1 ; i++){

   if(i <= nbStars){

    stars.push(
      < img key={i} src={Staractive} alt="stars-red"/>
    )
   }else{
    stars.push(
        < img key={i} src={StarInactive} alt="stars-grey"/>

    )
   }
  }
  return (
    <div>
       {stars}
    </div>
  )
}

export default Stars
