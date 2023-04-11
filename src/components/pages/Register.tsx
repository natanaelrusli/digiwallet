import AuthLayout from "../layouts/AuthLayout"

import { RegisterForm } from "../organisms"

import AuthImage from '../../assets/auth_image.png'


const Register = () => {
  return (
    <>
      <AuthLayout
        image={AuthImage}
      >
        <RegisterForm />
      </AuthLayout>
    </>
  )
}

export default Register