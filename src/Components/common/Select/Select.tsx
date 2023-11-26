import {
	Select as ChakraSelect,
	SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

export type SelectProps = ChakraSelectProps & {
	options: { label: string; value: any }[];
};

export const Select = ({ options, ...props }: SelectProps) => {
	return (
		<ChakraSelect {...props}>
			{options.map(({ label, value }, i) => (
				<option
					value={value}
					key={i}
					style={{ marginLeft: '16px', marginRight: '16px' }}
				>
					{label}
				</option>
			))}
		</ChakraSelect>
	);
};
