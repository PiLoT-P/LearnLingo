const { useFormik } = require("formik")

const FormikWrapper = ({ initialValues, onSubmit, validationSchema, children }) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return <>{children(formik)}</>;
}

export default FormikWrapper;