export interface DisclosureProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  onToggle?: () => void;
}
