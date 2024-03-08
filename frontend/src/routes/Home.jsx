import { useAuth } from "../AuthContext";
import React from "react";

const Home = () => {
  const { isAuth } = useAuth();
  return (
    <h1>
      Hello world!
      {isAuth ? <p>Logged In</p> : <p>Not Logged In</p>}
    </h1>
  );
};

export default Home;
