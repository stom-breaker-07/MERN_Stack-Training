import react from 'react'   

function Parent({studentName}) {
    return(
        <div style={{backgroundColor:"lightblue", margin:"10px", padding:"10px"}}>
            <h1>Parent Component</h1>
            <Child studentName={studentName}/>
        </div>
    )
}

function Child({studentName}) {
    return(
        <div style={{backgroundColor:"lightgreen", margin:"10px", padding:"10px"}}>
            <h1>Child Component</h1>
            <GrandChild studentName={studentName}/>
        </div>
    )
}

function GrandChild({studentName}) {
    return(
        <div style={{backgroundColor:"lightcoral", margin:"10px", padding:"10px"}}>
            <h1>GrandChild Component</h1>
            <GreatGrandChild studentName={studentName}/>
        </div>
    )
}

function GreatGrandChild({studentName}) {
    return(
        <div style={{backgroundColor:"yellow", margin:"10px", padding:"10px"}}>
            <h1>GreatGrandChild Component</h1>
            <p>Hello "{studentName}" is base data passed from Parent to GreatGrandChild</p>
        </div>
    )
}

export default Parent