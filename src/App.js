import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "../src/components/Signup"
import Login from "../src/components/Login"
import TodoList from "./pages/TodoList";
import Profile from "../src/components/Profile"




function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>

        <Route path= "/" element ={ <Login />} />
        <Route path ="/signup" element={ <Signup />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/profile" element={<Profile />} />
   
     
       
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
