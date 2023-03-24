import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { logOutUser } from "./store/auth.actions";

export default function AuthLogOutPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logOutUser());
    navigate('/', { replace: true });
  }, [])

  return(<></>);
}