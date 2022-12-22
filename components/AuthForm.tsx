import Input from "./Input";

function AuthForm() {
  return (
    <div className='flex flex-col mx-auto gap-3 max-w-full sm:w-96'>
		<Input 
			label="Username"
			name="username"
			type='text'
			placeholder='Username'
		/>
		<Input 
			label="Password"
			name="password"
			type='password'
			placeholder='Password'
		/>
    </div>
  );
}

export default AuthForm;
