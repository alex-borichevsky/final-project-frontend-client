import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./auth-form.component";
import { registerUser } from "./store/auth.actions";
import { useAuthSelector } from "./store/auth.selectors";
import { RegistrationDto } from "./types/registration-dto.type";
import { schemaSignUp } from "./auth-schemas.yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

export default function AuthSignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const {errors} = useAuthSelector();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaSignUp),
    defaultValues: { email: '', password: '', confirmPassword: '' }
  });

  // useEffect(() => {
  //   if (errors.token)
  //     alert(errors.token);
  // }, [errors])

  const handleSubmitForm = (data: FieldValues) => {
    const dto: RegistrationDto = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };

    dispatch(registerUser({ dto }))
      .then(({ meta }) => {
        if (meta.requestStatus !== 'rejected') {
          reset();
          navigate('/', { replace: true });
        }
      })
  }

  return (
    <Form
      title="Sign Up"
      nameBtn="Sign Up"
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      control={control}
      errors={errors}
      isSignIn={false}
    />
  )
}