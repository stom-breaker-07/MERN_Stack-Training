import React from 'react'

function Son(props) {
    return (
       <div style={{background:'lightblue' , padding:"10px" , margin:"10px"}}>
         <h1>Son component</h1>
         <div>{props.children}</div>
       </div>
    )
}

function Daughter({brand,moble,children}) {
    return (
      <div style={{background:'yellow' , padding:"10px" , margin:"10px"}}>
         <h1>Daughter component ({brand} {moble})</h1>
         <div>{children}</div>
       </div>
    )
}

function Parent() {
  return (
    <div>
      <h1>My Two Children</h1>
      <Son>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nostrum velit atque, quasi vel, ex nobis hic suscipit quo aut molestiae quas a odit illo maiores nisi? Quae, tempora similique.
        </p>
      </Son>
      <Daughter brand={"Apple"} moble={"IPhone 15"}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum veritatis adipisci mollitia inventore ut atque magni odio velit facilis vel, maxime, fugiat expedita? Vitae iure ipsa ratione consequuntur assumenda.</p>
      </Daughter>
    </div>
  )
}
export default Parent