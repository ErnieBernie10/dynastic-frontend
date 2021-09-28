import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  DrawerFooter,
  Button,
  DrawerProps,
} from "@chakra-ui/react";
import React from "react";
import { DisclosureProps } from "../interface/DisclosureProps";

interface DrawerFormProps extends DisclosureProps, DrawerProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  header: React.ReactNode | string;
  isLoading?: boolean;
}
export const DrawerForm: React.FC<DrawerFormProps> = ({
  isOpen,
  onClose,
  onOpen,
  children,
  onSubmit,
  header,
  isLoading = false,
  ...rest
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} {...rest}>
      <DrawerOverlay>
        <form onSubmit={onSubmit}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>

            <DrawerBody>
              <Box mx={12}>{children}</Box>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                colorScheme="green"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </DrawerOverlay>
    </Drawer>
  );
};
