import { useFormik } from "formik"; // custom hooks defined in formik library ...
import { validation } from "./validationForm";


const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: (data, action) => {
            console.log(data);
            action.resetForm();
        },
    });
    return (
        <>
            <fieldset className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto mt-11 w-80">
                <legend className="text-xl font-semibold mb-4">Sign In Form</legend>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Your email address"
                    />
                    {formik.errors.email && formik.touched.email && (
                        <span className="text-red-500">{formik.errors.email}</span>
                    )}
                    <br /> <br /> <br />
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Your password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="text-red-500">{formik.errors.password}</span>
                    )}
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Sign In</button>
                        <button type="reset" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-400" onClick={formik.handleReset}>Reset</button>
                    </div>
                </form>
            </fieldset>
        </>
    )
}

export default SignIn