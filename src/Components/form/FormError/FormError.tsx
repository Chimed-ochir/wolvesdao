import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { FieldMetaProps } from "formik";

export const FormError = ({ meta }: { meta: FieldMetaProps<any> }) => {
  if (!meta.touched || !meta.error) return null;
  return (
    <HStack alignItems="center" spacing="7px">
      <Icon as={FaInfoCircle} color="#FF6060" fontSize="14" />
      <Text color="#FF6060" fontSize="12">
        {meta.error}
      </Text>
    </HStack>
  );
};
