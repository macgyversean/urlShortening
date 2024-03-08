import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  useEffect(() => {
    localStorage.clear();
    setIsAuth(false);
    return navigate("/logout");
  }, [navigate, setIsAuth]);
};
export default Logout;
