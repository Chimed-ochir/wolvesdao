import { useField } from 'formik';
import { Box, HStack, Text, Tooltip } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { Select, SelectProps } from '@/components/common/Select';
import { FormError } from '@/components/form/FormError/FormError';
import { Link } from '@/components/common/Link';
import { useThemeContext } from '@/contexts/ThemeContext';

export type FormSelectProps = SelectProps & {
	name: string;
	hideError?: boolean;
	label?: string;
	isLoading?: boolean;
	isRequired?: boolean;
	tooltipText?: string;
	tooltipLink?: string;
};

const TooltipIcon = forwardRef((props, ref: any) => {
	const { secondaryBg } = useThemeContext();
	return (
		<Box
			ref={ref}
			{...props}
			cursor='pointer'
			_hover={{ bg: secondaryBg }}
			p='1'
			borderRadius='50%'
		>
			<FaInfoCircle size={14} />
		</Box>
	);
});
TooltipIcon.displayName = 'TooltipIcon';

export const FormSelect = ({
	name,
	hideError = false,
	label,
	isLoading,
	isRequired = false,
	tooltipLink,
	tooltipText,
	...props
}: FormSelectProps) => {
	const opacity = isLoading ? 0.7 : 1;
	const [field, meta] = useField(name);
	return (
		<Box w='100%'>
			{label ? (
				<HStack alignItems='center' pb='sm'>
					<Text opacity={opacity} fontWeight={700} lineHeight='150%'>
						{label}
						{isRequired ? '*' : null}
					</Text>
					{tooltipText ? (
						<Tooltip label={tooltipText} hasArrow textAlign='center'>
							<TooltipIcon />
						</Tooltip>
					) : tooltipLink ? (
						<Link href={tooltipLink} target='_blank' w='fit-content'>
							<TooltipIcon />
						</Link>
					) : null}
				</HStack>
			) : null}
			<Select {...props} {...field} />
			{!hideError ? <FormError meta={meta} /> : null}
		</Box>
	);
};
