// src/app/setor-limbah/useDepositForm.ts
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ApiError,
  DepositFormData,
  DepositPayload,
  ModalType,
} from "@/type/TAPI";
import { createDeposit } from "@/api/services/deposit";
import { checkAuth } from "@/utils/checkAuth";

export const useDepositForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<DepositFormData>({
    name: "",
    waste_type: "",
    pickup_method: "",
    waste_weight: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isAuthenticated } = checkAuth();
    if (!isAuthenticated) {
      setErrorMessage("Anda harus login terlebih dahulu");
      setActiveModal("error");
      return;
    }

    if (Number(formData.waste_weight) <= 0) {
      setErrorMessage("Berat limbah harus lebih dari 0");
      setActiveModal("error");
      return;
    }

    setActiveModal("confirmation");
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const { token, isAuthenticated } = checkAuth();
      if (!isAuthenticated || !token) {
        throw new Error("Sesi Anda telah berakhir, silakan login kembali");
      }

      const payload: DepositPayload = {
        name: formData.name,
        waste_type: formData.waste_type,
        pickup_method: formData.pickup_method,
        waste_weight: parseFloat(formData.waste_weight),
      };

      await createDeposit(payload);
      setActiveModal("success");
    } catch (error) {
      const err = error as ApiError;
      setErrorMessage(err.message || "Terjadi kesalahan saat menyetor limbah");
      setActiveModal("error");

      if (err.status === 401) {
        setTimeout(() => router.push("/login"), 2000);
      }
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        waste_type: "",
        pickup_method: "",
        waste_weight: "",
      });
    }
  };

  return {
    formData,
    setFormData,
    isLoading,
    activeModal,
    setActiveModal,
    errorMessage,
    handleSubmit,
    handleConfirm,
  };
};
