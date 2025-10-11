import type { IsidebarSteps } from "../types/appointments.interface";
import boxIcon from "../assets/icons/box.png";
import clipboardIcon from "../assets/icons/clipboard-text.png";
import discountIcon from "../assets/icons/discount-shape (1).png";
import frameIcon from "../assets/icons/frame.png";
import galleryIcon from "../assets/icons/gallery.png";
import moneyIcon from "../assets/icons/money-recive.png";
import peopleIcon from "../assets/icons/people.png";
import chartIcon from "../assets/icons/presention-chart.png";
import statusIcon from "../assets/icons/status-up.png";
import invoice from "../assets/icons/invoice.png";
import type { CardConfig } from "../types/appointments.interface";

export const SIDEBAR_STEPS: IsidebarSteps[] = [
  {
    items: [
      { id: "dashboards", label: "Dashboards", icon: frameIcon },
      { id: "pos", label: "POS", icon: frameIcon },
      { id: "services", label: "Services", icon: chartIcon },
      { id: "inventory", label: "Inventory", icon: frameIcon },
    ],
  },
  {
    title: "Orders",
    items: [
      {
        id: "appointments",
        label: "Appointments",
        icon: boxIcon ,
        isActive: true,
        hasSubmenu: true,
      },
      { id: "pos-orders", label: "POS Orders", icon: clipboardIcon  },
    ],
  },
  {
    title: "Users",
    items: [
      { id: "staff", label: "Staff", icon: peopleIcon },
      { id: "users", label: "Users", icon: peopleIcon },
    ],
  },
  {
    title: "Offers & Promotions",
    items: [
      { id: "banners", label: "Banners", icon: galleryIcon },
      { id: "coupons", label: "Coupons", icon: discountIcon },
      { id: "reels", label: "Reels Management", icon: discountIcon },
      { id: "analytics", label: "Analytics", icon: discountIcon },
    ],
  },
  {
    title: "Transactions & Reports",
    items: [
      { id: "transactions", label: "Transactions", icon: moneyIcon },
      { id: "sale-reports", label: "Sale Reports", icon: statusIcon },
      { id: "product-reports", label: "Product Reports", icon: clipboardIcon },
    ],
  },
];
export  const SAMPLE_CARDS: CardConfig[] = [
    {
      id: "987654321",
      status: "completed",
      customerName: "Shivani Prajapati",
      services: "Deep Tissue Massage + Hot Stone Mass...",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "cash", amount: 500 },
      actions: [
        { text: "Invoice", variant: "outline", icon: invoice },
        { text: "View Details", variant: "outline", icon: invoice },
      ],
      showDatePicker: false,
    },
    {
      id: "987654321",
      status: "new-request",
      customerName: "Shivani Prajapati",
      services: "Manicure, Pedicure",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "paid", amount: 500 },
      actions: [
        { text: "Accept", variant: "success" },
        { text: "Decline", variant: "outline" },
      ],
      showDatePicker: true,
    },
    {
      id: "987654321",
      status: "ongoing",
      customerName: "Shivani Prajapati",
      services: "Manicure, Pedicure",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "online", amount: 500, percentage: "10% Paid" },
      actions: [
        { text: "Complete", variant: "success" },
        { text: "View Details", variant: "outline", icon: invoice },
      ],
      showDatePicker: true,
    },
    {
      id: "987654321",
      status: "upcoming",
      customerName: "Shivani Prajapati",
      services: "Dermabrasion (Session 1 of 7)",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "online", amount: 500, percentage: "10% Paid" },
      actions: [
        { text: "Start", variant: "success" },
        { text: "Cancel", variant: "outline" },
      ],
      showDatePicker: true,
    },
    {
      id: "987654321",
      status: "cancelled",
      customerName: "Shivani Prajapati",
      services: "Facial Packages, Manicure, Pedicure",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "refunded", amount: 500 },
      actions: [
        { text: "Receipt", variant: "outline", icon: invoice },
        { text: "View Details", variant: "outline", icon: invoice },
      ],
      showDatePicker: false,
    },
    {
      id: "987654321",
      status: "new-request",
      customerName: "Shivani Prajapati",
      services: "Manicure, Pedicure",
      date: "Thursday 16 May",
      time: "08:00 AM",
      staffName: "Dr. Anjali Mehra",
      payment: { type: "cash", amount: 500 },
      actions: [
        { text: "Accept", variant: "success" },
        { text: "Decline", variant: "outline" },
      ],
      showDatePicker: true,
    },
  ];