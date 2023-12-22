import {
	Input,
	InputGroup as ChakraInputGroup,
	InputProps,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';
import { omit } from 'rambda';
import { MutableRefObject, ReactElement } from 'react';

export type InputGroupProps = InputProps & {
	leftElement?: ReactElement;
	rightElement?: ReactElement;
	refr?: MutableRefObject<any>;
};

export const InputGroup = ({
	leftElement,
	rightElement,
	pr,
	refr,
	...inputProps
}: InputGroupProps) => {
	return (
		<ChakraInputGroup>
			{leftElement ? (
				<InputLeftElement px='sm' h='100%'>
					{leftElement}
				</InputLeftElement>
			) : null}
			<Input
				ref={refr ?? undefined}
				pl={leftElement ? '52px' : undefined}
				pr={pr ? pr : rightElement ? '52px !important' : '16px'}
				{...(omit('form', inputProps) as any)}
			/>
			{rightElement ? (
				<InputRightElement h='100%'>{rightElement}</InputRightElement>
			) : null}
		</ChakraInputGroup>
	);
};
