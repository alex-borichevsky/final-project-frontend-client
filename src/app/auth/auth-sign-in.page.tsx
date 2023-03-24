import { useAppDispatch } from "hooks/redux";
import { useNavigate } from "react-router-dom";
import Form from "./auth-form.component";
import { signInUser } from "./store/auth.actions";
import { SignInDto } from "./types/sign-in-dto.type";

export default function AuthSignInPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email : string = String(data.get('email'));
    const password : string = String(data.get('password'));
    const dto: SignInDto = {
      email: email, 
      password: password
    };

    dispatch(signInUser({dto}));
    event.currentTarget.reset();
    navigate('/');
  }

  return (
    <Form title="Sign in" nameBtn="Sign In" handleSubmit={handleSubmit} isSignIn={true}/>
  )
}