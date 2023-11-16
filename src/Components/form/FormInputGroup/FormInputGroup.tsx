import { Box } from '@chakra-ui/react';
import { useField } from 'formik';
import { InputGroup, InputGroupProps } from '@/components/common/Input';
import { FormError } from '@/components/form/FormError/FormError';

export type FormInputGroupProps = InputGroupProps & {
	name: string;
	hideError?: boolean;
};

export const FormInputGroup = ({
	name,
	hideError,
	...props
}: FormInputGroupProps) => {
	const [field, meta] = useField(name);
	return (
		<Box w='100%'>
			<InputGroup {...props} {...field} />
			{!hideError ? <FormError meta={meta} /> : null}
		</Box>
	);
};
