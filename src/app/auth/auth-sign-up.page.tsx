import { useAppDispatch } from "hooks/redux";
import { useNavigate } from "react-router-dom";
import Form from "./auth-form.component";
import { registerUser } from "./store/auth.actions";
import { RegistrationDto } from "./types/registration-dto.type";

export default function AuthSignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    
    const data = new FormData(event.currentTarget)
    const email : string = String(data.get('email'));
    const password : string = String(data.get('password'));
    const confirmPassword : string = String(data.get('confirmPassword'));
    const dto: RegistrationDto = {
      email: email, 
      password: password, 
      confirmPassword: confirmPassword
    };

    dispatch(registerUser({dto}))
      .then((response: any) => {
        if (response.meta.rejectedWithValue) {
          console.log(response.payload);
        } else {
          currentTarget.reset();
          navigate('/', {replace: true});
        }
      })
  }

  return (
    <Form title="Sign Up" nameBtn="Sign Up" handleSubmit={handleSubmit} isSignIn={false}/>
  )
}