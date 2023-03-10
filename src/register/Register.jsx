import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userRegisterAsync } from '../redux/actions/userAction'
import './register.scss'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const loading = useSelector((state) => state.loading)

    const dispatch = useDispatch()

    const submitForm = (data) => {
        console.log(data);
        dispatch(userRegisterAsync(data))
    }

    return (
        <article className='register'>
            <form onSubmit={handleSubmit(submitForm)} className='register__info'>
                <label>Nombre</label>
                <input className={errors.name ? 'inputError' : 'inputSuccess'} type="text" placeholder='Ingrese su nombre' {...register('name', {
                    required: 'Nombre requerido'
                })} />
                {errors.name && (
                    <span>{errors.name.message}</span>
                )}

                <label>Email</label>
                <input className={errors.email ? 'inputError' : 'inputSuccess'} type="text" placeholder='Ingrese su correo' {...register('email', {
                    required: 'Email requerido'
                })

                } />
                {errors.email && (
                    <span>{errors.email.message}</span>
                )}

                <label>Contraseña</label>
                <input className={errors.password ? 'inputError' : 'inputSuccess'} type="password" placeholder='Escriba su contraseña' {...register('password', {
                    required: 'Contraseña requerida'
                })} />
                {errors.password && (
                    <span>{errors.password.message}</span>
                )}

                <button type='submit' disabled={loading}
                >Registrarse</button>
                {loading && (
                    <span>Cargando...</span>


                )}

                <Link to='/login' className='navlink'>Iniciar sesión</Link>

            </form>

        </article>

    )
}

export default Register