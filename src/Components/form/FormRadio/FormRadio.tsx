import { Box } from '@chakra-ui/react';
import { useField } from 'formik';
import { buildEventObject } from '@/utils/formik';
import { FormError } from '../FormError';
import { Radio, RadioProps } from '../../common/Radio/Radio';

export type FormRadioProps = RadioProps & {
	name: string;
};

export const FormRadio = ({ name, ...props }: FormRadioProps) => {
	const [field, meta] = useField(name);

	return (
		<Box w='100%'>
			<Radio
				{...props}
				{...field}
				onChange={(value) => field.onChange(buildEventObject(name, value))}
			/>
			<FormError meta={meta} />
		</Box>
	);
};
