import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import ListPages from "./Component/ListPage";
import { UserContextProvider } from "./Component/Context/usercontext"

function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
        
      </UserContextProvider>
     
    </div>
  );
}

export default App;
