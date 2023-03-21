import Form from "./auth-form.component";

export default function AuthSignInPage() {
  const handleSubmit = () => {

  }

  return (
    <Form title="Sign in" nameBtn="Sign In" handleSubmit={handleSubmit} isSignIn={true}/>
  )
}