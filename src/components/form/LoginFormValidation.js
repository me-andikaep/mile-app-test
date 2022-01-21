// var patternEmail = new RegExp(
// 	/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
// );

export const LoginFormValidation = {
	validations: {
		email: {
			required: {
				value: true,
				message: 'Required',
			},
			// pattern: {
			// 	value: patternEmail,
			// 	message: 'Format Email invalid',
			// },
		},
		password: {
			required: {
				value: true,
				message: 'Required',
			},
		},
	},
};
