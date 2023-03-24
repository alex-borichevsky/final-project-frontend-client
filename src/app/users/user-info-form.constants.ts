import * as yup from 'yup';

export const schema = yup
    .object()
    .shape({
        firstname: yup.string().required('Firstname is a required field'),
        lastname: yup.string().required('Lastname is a required field'),
        phone: yup.string().required('Phone is a required field'),
        address: yup.string().required('Addreess is a required field'),
    })
    .required();