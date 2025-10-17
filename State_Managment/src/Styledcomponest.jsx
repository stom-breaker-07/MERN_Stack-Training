import styled from "styled-components";
import React from 'react'

function Styledcomponest() {
    const Title = styled.h3`
    color: purple;
    `;
   const Card =styled.div`
    background-color: white;
    color: white;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  `;

  const Para=styled.p`
    color:black;
    font-size:20px;
  `;
  return (
    <>
    <Card>
       <Title>Toyota Supra</Title>
       <Para>The Toyota Supra is a legendary sports car known for its performance and sleek design.</Para>
    </Card>
    </>
  )
}

export default Styledcomponest