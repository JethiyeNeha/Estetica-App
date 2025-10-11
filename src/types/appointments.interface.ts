import type { PaymentType } from "../components/layouts/Card";
import type { ButtonVariant } from "../components/library/Button";

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
}

interface IsidebarSteps {
  title?: string;
  items: MenuItem[];
}
interface CardShowcaseProps {
  searchQuery: string;
}
interface HeaderProps {
  userName?: string;
  userRole?: string;
}
interface BadgeConfig {
  text: string;
  color: string;
  bgColor: string;
  icon?: string;
}

interface ActionButton {
  text: string;
  variant: ButtonVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface PaymentInfo {
  type: PaymentType;
  amount: number;
  percentage?: string;
}

type CardStatus =
  | "completed"
  | "new-request"
  | "ongoing"
  | "upcoming"
  | "cancelled";


interface CardConfig {
  id: string;
  status: CardStatus;
  customerName: string;
  services: string;
  date: string;
  time: string;
  staffName?: string;
  payment: PaymentInfo;
  actions: ActionButton[];
  avatar?: string;
  showDatePicker: boolean;
}
 export type {PaymentInfo, ActionButton, BadgeConfig, HeaderProps, CardShowcaseProps, IsidebarSteps, CardStatus, CardConfig }