import { MdArrowBackIosNew } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Icons({
	type,
	size,
	style,
	className,
	color,
	onClick,
}) {
	switch (type) {
		case 'arrowLeft1':
			return (
				<MdArrowBackIosNew
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
				/>
			);
		case 'eyeShow':
			return (
				<AiOutlineEye
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
					onClick={onClick}
				/>
			);
		case 'eyeHide':
			return (
				<AiOutlineEyeInvisible
					style={{ ...style }}
					className={className}
					size={size}
					color={color}
					onClick={onClick}
				/>
			);

		default:
			break;
	}
}
