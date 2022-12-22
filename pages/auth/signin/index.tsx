import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import Router from "next/router";
import AuthForm from "../../../components/AuthForm";
import Button from "../../../components/Button";
import { authSchema } from "../../../types/forms";
import { IAuthForm } from "../../../types/forms";

async function handleSubmit(values: IAuthForm, actions: FormikHelpers<IAuthForm>) {
  const router = Router;
  const { username, password } = values;
  try {
    await axios.post("/api/auth/signin", {
      username: username,
      password: password,
    });
    return router.push("/home");
  } catch (e) {
    const error = e as ErrorEventInit;
    return alert(error.message);
  }
}

function SignIn() {
  const initialValues: IAuthForm = { username: "", password: "" };
  return (
    <section className="flex flex-col items-center justify-center gap-14 h-screen">
      <h1 className="font-bold text-5xl">Sign In</h1>
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
                Sign In
              </Button>

            </div>
          </Form>
        )}
      </Formik>
      <span>
        Or{" "}
        <Link className="underline font-bold" href={"/auth/signup"}>
          Sign Up
        </Link>
      </span>
    </section>
  );
}

export default SignIn;
