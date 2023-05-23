import { FacebookProvider, LoginButton } from "react-facebook";

export default function LoginButtonExample() {
  function handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <FacebookProvider appId="918661849427583">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        Login via Facebook
      </LoginButton>
      {process.env.FB_APP_ID}
    </FacebookProvider>
  );
}
