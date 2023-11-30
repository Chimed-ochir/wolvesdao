import { Box, Text, useToast as useCToast } from "@chakra-ui/react";

const ToastRender = ({
  title,
  status,
  description,
}: {
  title: string;
  status: "success" | "error";
  description: string;
}) => {
  const bgColor = status === "success" ? "green.400" : "red.400";
  const textColor = "white";
  return (
    <Box bg={bgColor} px="4" py="2">
      <Text fontSize="18" color={textColor}>
        {title}
      </Text>
      <Text fontSize="14" color={textColor}>
        {description}
      </Text>
    </Box>
  );
};

export const useToast = () => {
  const toast = useCToast();

  const showSuccessToast = (description: string, title = "Success") => {
    toast({
      title,
      status: "success",
      description,
      render: () => (
        <ToastRender title={title} status="success" description={description} />
      ),
    });
  };

  const showErrorToast = (description: string, title = "Error") => {
    toast({
      title,
      status: "error",
      description,
      render: () => (
        <ToastRender title={title} status="error" description={description} />
      ),
    });
  };

  return { showSuccessToast, showErrorToast };
};
