import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginForm from '../components/form/LoginForm';
import Icons from '../components/icons';
import BannerLanguage from '../components/login/BannerLanguage';
import FloatCopyright from '../components/login/FloatCopyright';

const Login = ({ setIsLogin }) => {
	return (
		<>
			<div className=' container login-container'>
				<BannerLanguage />

				<div className='wrapper-login'>
					<Row className='h-100 d-flex align-items-center'>
						<Col xs={12} lg={5}>
							<div className='login-section'>
								<a
									href='https://dev.mile.app/'
									className='wrapper-navigate-back mb-3'
								>
									<Icons type='arrowLeft1' />
									<span className='txt'>Back To Home</span>
									<img
										className='ms-2'
										alt=''
										src='https://taskdev.mile.app/091546cdda82176f8a94f6119d042cc3.png'
									/>
								</a>
								<LoginForm setIsLogin={setIsLogin} />
							</div>
						</Col>
						<Col xs={12} lg={7} className='col-img'>
							<div className='wrapper-img'>
								<img
									alt='asd'
									src='https://taskdev.mile.app/591c9afae08d42365820ece5754e7bfc.png'
								/>
							</div>
						</Col>
					</Row>
				</div>

				<FloatCopyright />
			</div>
		</>
	);
};

export default Login;
