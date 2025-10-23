import { useState, createContext, useContext } from "react";
const UserContext = createContext();

function ContextApi() {
  const [user, setUser] = useState("Chinmay");
  return (
    <>
      
       <UserContext.Provider value={user}>
       <h1>{`Hello ${user}`}</h1>
       <ComponentA />
       </UserContext.Provider>
    </>
  );
}

function ComponentA() {
  return (
    <div>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div>
        <ComponentC/>
    </div>
  );
}

function ComponentC() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component C</h1>
            <h2>{`Hello ${user} from Component C`}</h2>
        </div>
    );
}

export default ContextApi;
