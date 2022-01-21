import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Icons from '../icons';
import { LoginFormValidation } from './LoginFormValidation';

const LoginForm = ({ setIsLogin }) => {
	const [showPass, setShowPass] = useState(false);
	const [isDisable, setIsDisable] = useState(true);
	const [organizationName, setOrganizationName] = useState('admin');
	const [orgErr, setOrgErr] = useState(false);

	let history = useHistory();

	const defaultData = {
		email: 'admin',
		password: 'mileapp',
	};

	const validation = LoginFormValidation.validations;

	const { handleSubmit, handleChange, data, errors } = useForm({
		validations: validation,
		onSubmit: () => {
			if (
				data.email === defaultData.email &&
				data.password === defaultData.password
			) {
				setIsLogin();
				history.push('/map');
			}
		},
		initialValues: {
			email: '',
			password: '',
		},
	});

	useEffect(() => {
		if (organizationName === defaultData.email) {
			setIsDisable(false);
			setOrgErr(false);
		} else {
			setIsDisable(true);
			setOrgErr(true);
		}

		if (organizationName === '') {
			setOrgErr(true);
		}

		return () => {};
	}, [defaultData.email, organizationName]);

	return (
		<div className='login-card'>
			<div className='wrapper-title mb-4'>
				<h1 className='title'>Login</h1>
				<img
					alt=''
					src='https://taskdev.mile.app/091546cdda82176f8a94f6119d042cc3.png'
				/>
			</div>

			<Form className='login-form'>
				<Form.Group className='mb-3'>
					<Form.Label>Organization Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Input Your Email or Username'
						required
						value={organizationName || ''}
						onChange={(e) => setOrganizationName(e.target.value)}
					/>
					<Form.Text>
						{organizationName === '' && orgErr && (
							<span className='text-error'>
								The organization field is required{' '}
							</span>
						)}

						{orgErr && (
							<span className='text-error'>
								oops :( {organizationName}.mile.app is not available
							</span>
						)}
					</Form.Text>
				</Form.Group>
			</Form>

			<Form className='login-form'>
				<Form.Group className='mb-3'>
					<Form.Label>Email or Username</Form.Label>
					<Form.Control
						type='text'
						placeholder='Input Your Email or Username'
						required
						value={data.email || ''}
						onChange={handleChange('email')}
						disabled={isDisable}
					/>
					<Form.Text className='text-muted text-error'>
						<span className=' text-error'>{errors.email}</span>
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Password</Form.Label>
					<InputGroup>
						<Form.Control
							type={showPass ? 'text' : 'password'}
							placeholder='Password'
							required
							value={data.password || ''}
							onChange={handleChange('password')}
							disabled={isDisable}
						/>
						<InputGroup.Text>
							{showPass ? (
								<Icons
									type='eyeHide'
									className='eye'
									size={18}
									onClick={() => setShowPass(false)}
								/>
							) : (
								<Icons
									type='eyeShow'
									className='eye'
									size={18}
									onClick={() => setShowPass(true)}
								/>
							)}
						</InputGroup.Text>
					</InputGroup>
					<Form.Text className='text-muted text-error'>
						<span className=' text-error'>{errors.password}</span>
					</Form.Text>
				</Form.Group>
			</Form>

			<div className='footer'>
				<button className='btn-login mb-4' onClick={handleSubmit}>
					Login
				</button>
				<p>
					Not registered yet?
					<a href='https://mywa.link/vr0op24n' className='contact-us'>
						Contact Us
					</a>
					for more info
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
