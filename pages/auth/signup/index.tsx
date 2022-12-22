import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import AuthForm from "../../../components/AuthForm";
import Button from "../../../components/Button";
import { authSchema } from "../../../types/forms";
import { IAuthForm } from "../../../types/forms";

function handleSubmit(values: IAuthForm, _: FormikHelpers<IAuthForm>) {
  const {username, password} = values
  try {
    axios.post('/api/auth/signup', {
      username: username,
      password: password
      })
  } catch (error) {
      alert(error)
  }
  
}

function SignUp() {
  const initialValues: IAuthForm = { username: "", password: "" };
  return (
    <section className="flex flex-col items-center justify-center gap-14 h-screen">
      <h1 className="font-bold text-5xl">Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={authSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="flex flex-col">
              <AuthForm />
              <Button type="submit" styles="mt-6" variant="primary">
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <span>Or <Link className="underline font-bold" href={'/auth/signin'}>Sign In</Link></span>
    </section>
  );
}

export default SignUp;
