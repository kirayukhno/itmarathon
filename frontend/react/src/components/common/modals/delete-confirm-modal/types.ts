import type { DeleteConfirmProps } from "@components/common/personal-information/types";

export interface DeleteConfirmModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    iconName: string;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
    variant?: "danger" | "primary";
    personalInfoData: DeleteConfirmProps;
}
