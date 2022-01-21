import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const BannerLanguage = () => {
	const [lang, setLang] = useState('en');

	const parseLang = (lang) => {
		switch (lang) {
			case 'en':
				return 'English';
			case 'id':
				return 'Indonesia';

			default:
				break;
		}
	};

	return (
		<div className='wrapper-language'>
			<span className='mx-3'>Call Us Now: +62 812-1133-5608</span>
			<Dropdown>
				<Dropdown.Toggle className='mx-3 c-dropdown'>
					{parseLang(lang)}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{lang === 'en' && (
						<Dropdown.Item onClick={() => setLang('id')}>
							Indonesia
						</Dropdown.Item>
					)}
					{lang === 'id' && (
						<Dropdown.Item onClick={() => setLang('en')}>English</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default BannerLanguage;
