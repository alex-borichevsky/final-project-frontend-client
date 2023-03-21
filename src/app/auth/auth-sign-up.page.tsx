import Form from "./auth-form.component";

export default function AuthSignUpPage() {
  const handleSubmit = () => {

  }

  return (
    <Form title="Sign Up" nameBtn="Sign Up" handleSubmit={handleSubmit} isSignIn={false}/>
  )
}