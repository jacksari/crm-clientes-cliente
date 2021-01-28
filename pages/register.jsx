import React,{ useState} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { gql, useMutation} from '@apollo/client'

const NUEVA_CUENTA = gql`
    mutation nuevoUsuario($input: UsuarioInput){
      nuevoUsuario(input: $input){
        id
        nombre
        apellido
        email
      }
    }
`

function Register() {
    const [mensaje, setMensaje] = useState(null);

    //Mutation para crear usuario
    const [nuevoUsuario]   = useMutation(NUEVA_CUENTA)

    //Calidacion de formulario
    const formik = useFormik({
        initialValues: {
            nombre: 'Jack',
            apellido: 'Sari',
            email: 'janasarii@gmail.com',
            password: '123456'
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email debe ser válido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ir vacío').min(6,'El password debe tener al menos 6 caracteres')
        }),
        onSubmit: async (valores )=> {
            const { nombre, apellido, email, password } = valores
            try {
                const {data} = await nuevoUsuario({
                    variables: {
                        input: {
                            nombre,
                            apellido,
                            email,
                            password
                        }
                    }
                })
                console.log(data)
                setMensaje(`${data.nuevoUsuario.nombre} fue registrado con éxito`)
            }catch (e) {
                console.log('error',e.message)
                setMensaje(e.message)
            }
        }
    })

    //funcion para mostrar mensaje
    const mostrarMensaje = () => {
        return(
            <div className="bg-white py-2 px-3 w-1/2 text-center my-3 rounded">
                <p>{mensaje}</p>
            </div>
        )
    }

    return (
        <>
            <Layout>
                <div className="flex justify-center">
                    {mensaje && mostrarMensaje()}
                </div>
                <h1 className="text-white text-center text-2xl font-light">Crea una nueva cuenta</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm ">
                        <form
                            className="bg-white rounded-xl shadow-md px-8 pt-6 pb-6 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese nombre"
                                    className={formik.errors.nombre ? 'shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none ring-2 ring-red-500': 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring'}
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {
                                formik.touched.nombre && formik.errors.nombre ? (
                                    <div className="bg-red-100 text-red-700 pl-2 mb-2 border-l-4 border-red-500 p-1 text-sm text-white">
                                        <p>{formik.errors.nombre}</p>
                                    </div>
                                ) : null
                            }
                            <div className="mb-4">
                                <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
                                <input
                                    id="apellido"
                                    type="text"
                                    placeholder="Ingrese apellido"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    value={formik.values.apellido}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {
                                formik.touched.apellido && formik.errors.apellido ? (
                                    <div className="bg-red-100 text-red-700 pl-2 mb-2 border-l-4 border-red-500 p-1 text-sm text-white">
                                        <p>{formik.errors.apellido}</p>
                                    </div>
                                ) : null
                            }
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Ingrese email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {
                                formik.touched.email && formik.errors.email ? (
                                    <div className="bg-red-100 text-red-700 pl-2 mb-2 border-l-4 border-red-500 p-1 text-sm text-white">
                                        <p>{formik.errors.email}</p>
                                    </div>
                                ) : null
                            }
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Ingrese password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {
                                formik.touched.password && formik.errors.password ? (
                                    <div className="bg-red-100 text-red-700 pl-2 mb-2 border-l-4 border-red-500 p-1 text-sm text-white">
                                        <p>{formik.errors.password}</p>
                                    </div>
                                ) : null
                            }
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase border-2 hover:text-gray-700 border-gray-800 hover:bg-white rounded transition duration-500 ease-in-out cursor-pointer"
                                value="crear cuenta"
                            />
                            <Link href="/login">
                                <a>
                                    <p className="text-sm text-right pt-2">¿Tienes cuenta?</p>
                                </a>
                            </Link>
                        </form>


                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Register;