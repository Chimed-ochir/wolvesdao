import {
	RadioGroup,
	Radio as ChakraRadio,
	RadioGroupProps,
	Flex,
} from '@chakra-ui/react';

export type RadioProps = Omit<RadioGroupProps, 'children'> & {
	options: { label: string; value: any; isDisabled?: boolean }[];
};

export const Radio = ({ options, flexDirection, ...props }: RadioProps) => {
	return (
		<RadioGroup {...props}>
			<Flex flexDirection={flexDirection} gap='xs'>
				{options.map(({ label, value, isDisabled }, i) => (
					<ChakraRadio value={value} key={i} isDisabled={isDisabled}>
						{label}
					</ChakraRadio>
				))}
			</Flex>
		</RadioGroup>
	);
};
