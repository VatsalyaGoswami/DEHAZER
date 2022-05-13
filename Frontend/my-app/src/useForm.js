import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
		image: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		var { name, value } = e.target;
		if (name === 'image') value = e.target.files[0];
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validate(values));
		callback(values);
		setIsSubmitting(true);
	};

	// useEffect(() => {
	// 	if (Object.keys(errors).length === 0 && isSubmitting) {
	// 		callback();
	// 	}
	// }, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
