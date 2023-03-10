import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLoginAsync, userLoginProvider, userLoginWhithGoogleAsync } from '../../redux/actions/userAction'
import './login.scss'
import iconGoogle from '../../assets/iconGoogle.png'
import iconFacebook from '../../assets/facebook.png'
import { Facebook, Google } from '../../firebase/firebaseConfig'
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userLoginAsync(data))

  }


  const sessionProvider = (provider) => {
    dispatch(userLoginProvider(provider))
  }


  return (
    <article className='login'>
      <div className='login__info'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email
            <input type="text" placeholder='Ingrese su correo' {...register('email', {
              required: 'Email incorrecto'
            })} />

          </label>
          {errors.email && (
            <span>{errors.email.message}</span>
          )}
          <label>Contraseña
            <input type="password" placeholder='Ingrese su contraseña' {...register('password', {
              required: 'Contraseña incorrecta'
            })} />
          </label>
          {errors.password && (
            <span>{errors.password.message}</span>
          )}

          <button type='submit'>Iniciar sesión</button>
          {user.error ?
            <span>Usuario o contraseña incorrecta</span>:<></>}
          <small>¿No tiene una cuenta?</small>
          <Link to='/register' className='link'>Registrate valecita</Link>

        </form>
        <section>
          <button className='login__button' onClick={() => { sessionProvider(Google) }}><img src={iconGoogle} alt="google" /> Iniciar sesión con Google</button>
          <button className='login__button' onClick={() => { sessionProvider(Facebook) }}><img src={iconFacebook} alt="google" /> Iniciar sesión con Facebook</button>

        </section>


      </div>



    </article>
  )
}

export default Login