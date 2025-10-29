// import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
// import { toast } from "sonner";

// interface ToastOptions {
//   duration?: number;
//   position?:
//     | "top-left"
//     | "top-right"
//     | "bottom-left"
//     | "bottom-right"
//     | "top-center"
//     | "bottom-center";
//   dismissible?: boolean;
// }

// export const showToast = {
//   success: (message: string, options?: ToastOptions) => {
//     toast.success(message, {
//       duration: options?.duration || 4000,
//       position: options?.position || "top-right",
//       dismissible: options?.dismissible !== false,
//       icon: CheckCircle2,
//       style: {
//         backgroundColor: "#f0fdf4",
//         borderColor: "#16a34a",
//         color: "#15803d",
//       },
//     });
//   },

//   error: (message: string, options?: ToastOptions) => {
//     toast.error(message, {
//       duration: options?.duration || 6000,
//       position: options?.position || "top-right",
//       dismissible: options?.dismissible !== false,
//       icon: XCircle,
//       style: {
//         backgroundColor: "#fef2f2",
//         borderColor: "#dc2626",
//         color: "#dc2626",
//       },
//     });
//   },

//   warning: (message: string, options?: ToastOptions) => {
//     toast.warning(message, {
//       duration: options?.duration || 5000,
//       position: options?.position || "top-right",
//       dismissible: options?.dismissible !== false,
//       icon: AlertCircle,
//       style: {
//         backgroundColor: "#fffbeb",
//         borderColor: "#f59e0b",
//         color: "#d97706",
//       },
//     });
//   },

//   info: (message: string, options?: ToastOptions) => {
//     toast.info(message, {
//       duration: options?.duration || 4000,
//       position: options?.position || "top-right",
//       dismissible: options?.dismissible !== false,
//       icon: Info,
//       style: {
//         backgroundColor: "#eff6ff",
//         borderColor: "#3b82f6",
//         color: "#2563eb",
//       },
//     });
//   },

//   // Special methods for common shipment scenarios
//   shipment: {
//     created: (productName?: string) => {
//       const message = productName
//         ? `Shipment for "${productName}" has been created successfully`
//         : "Shipment has been created successfully";

//       showToast.success(message, { duration: 5000 });
//     },

//     creationFailed: (error?: string) => {
//       const message = error
//         ? `Failed to create shipment: ${error}`
//         : "Unable to create shipment. Please check your details and try again.";

//       showToast.error(message, { duration: 6000 });
//     },

//     validationError: (field: string) => {
//       showToast.warning(`Please check the ${field} field and try again.`, {
//         duration: 4000,
//       });
//     },

//     networkError: () => {
//       showToast.error(
//         "Network connection issue. Please check your internet connection and try again.",
//         { duration: 6000 }
//       );
//     },

//     saving: () => {
//       return toast.loading("Creating shipment...", {
//         duration: Infinity,
//         style: {
//           backgroundColor: "#f8fafc",
//           borderColor: "#64748b",
//           color: "#475569",
//         },
//       });
//     },

//     dismiss: (toastId: string | number) => {
//       toast.dismiss(toastId);
//     },
//   },
// };

// export default showToast;
