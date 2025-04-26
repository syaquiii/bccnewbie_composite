// src/app/setor-limbah/page.tsx
"use client";
import React from "react";
import Header from "./_components/Header";
import { DepositSection } from "./_components/DepositSection";
import { DepositModals } from "./_components/DepositModals";
import { useDepositForm } from "@/hooks/useSetorLimbah";

const DepositPage = () => {
  const {
    formData,
    isLoading,
    activeModal,
    errorMessage,
    handleSubmit,
    handleConfirm,
    setActiveModal,
    setFormData,
  } = useDepositForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <Header />
      <DepositSection
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <DepositModals
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        isLoading={isLoading}
        errorMessage={errorMessage}
        formData={formData}
        onConfirm={handleConfirm}
      />
    </section>
  );
};

export default DepositPage;
