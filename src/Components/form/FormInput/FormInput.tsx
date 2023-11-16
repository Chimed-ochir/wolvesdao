import {
  Box,
  HStack,
  Input as CInput,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useField } from "formik";
import { omit } from "rambda";
import { forwardRef, ReactElement, useMemo } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FormError } from "../FormError/FormError";
import { Tooltip } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
// import { useThemeContext } from "@/contexts/ThemeContext";

export type FormInputProps = InputProps & {
  format?: (value: string) => string;
  name: string;
  label?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  isMfa?: boolean;
  inputLeftElement?: ReactElement;
  inputRightElement?: ReactElement;
  tooltipText?: any;
  tooltipLink?: string;
};

const TooltipIcon = forwardRef((props, ref: any) => {
  const secondaryBg = "#2D3748";
  return (
    <Box
      ref={ref}
      {...props}
      cursor="pointer"
      _hover={{ bg: secondaryBg }}
      p="1"
      borderRadius="50%"
    >
      <FaInfoCircle size={14} />
    </Box>
  );
});
TooltipIcon.displayName = "TooltipIcon";

export const FormInput = ({
  name,
  type,
  label,
  isRequired = false,
  format = (value: string) => value,
  isLoading = false,
  isMfa = false,
  inputLeftElement,
  inputRightElement,
  tooltipText,
  tooltipLink,
  ...props
}: FormInputProps) => {
  const [field, meta] = useField(name);
  const opacity = isLoading ? 0.7 : 1;

  const additionalProps: any = useMemo(() => {
    if (isMfa)
      return {
        inputMode: "numeric",
        pattern: "[0-9]*",
        autoComplete: "one-time-code",
      };
    return {};
  }, [isMfa]);
  // const changePassword = () => {
  // 	if (type === 'password') {
  // 		type = 'text';
  // 	} else {
  // 		type = 'password';
  // 	}
  // };
  return (
    <Box w="100%">
      {label ? (
        <HStack alignItems="center" pb="sm">
          <Text opacity={opacity} fontWeight={500} lineHeight="150%">
            {label}
            {isRequired ? "*" : null}
          </Text>
          {tooltipText ? (
            <Tooltip label={tooltipText} hasArrow textAlign="center">
              <TooltipIcon />
            </Tooltip>
          ) : tooltipLink ? (
            <Link href={tooltipLink} target="_blank" w="fit-content">
              <TooltipIcon />
            </Link>
          ) : null}
        </HStack>
      ) : null}
      <InputGroup>
        {inputLeftElement ? (
          <InputLeftElement
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            {inputLeftElement}
          </InputLeftElement>
        ) : null}
        <CInput
          type={type}
          {...field}
          onChange={(e) => {
            const _e = { ...e };
            _e.target.value = format(_e.target.value) as any;
            field.onChange(_e);
          }}
          isDisabled={isLoading}
          {...additionalProps}
          {...(omit("form", props) as any)}
        />

        {/* {name === 'password' || name === 'confirmPassword' ? (
					<ViewIcon
						ml='-30px'
						mt='9px'
						w='20px'
						h='20px'
						cursor='pointer'
						zIndex={1}
						onClick={() => {
							changePassword;
						}}
					/>
				) : (
					''
				)} */}
        {inputRightElement ? (
          <InputRightElement
            pr="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            {inputRightElement}
          </InputRightElement>
        ) : null}
      </InputGroup>
      <Box mt={"4px"}>
        <FormError meta={meta} />
      </Box>
    </Box>
  );
};
