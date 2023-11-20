import { useState } from 'react';

interface FormValues {
    username: string;
    firstname: string;
    lastname: string;
    age: string;
    school: string;
    email: string;
    password: string;
}

type UseFormReturn = [
    FormValues,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    () => void
];

const useForm = (initialValues: FormValues): UseFormReturn => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const resetForm = () => {
        setValues(initialValues);
    }

    return [values, handleChange, resetForm];
};

export default useForm;
