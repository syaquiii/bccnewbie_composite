// src/app/setor-limbah/components/DepositModals.tsx
"use client";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import MaskotGagal from "@/assets/img/sadcompost.png";
import MaskotBerhasil from "@/assets/img/happycompost.png";
import { DepositFormData, ModalType } from "@/type/TAPI";
import { redirect } from "next/navigation";

interface DepositModalsProps {
  activeModal: ModalType | null;
  setActiveModal: (modal: ModalType | null) => void;
  isLoading: boolean;
  errorMessage: string;
  formData: DepositFormData;
  onConfirm: () => void;
}

export const DepositModals = ({
  activeModal,
  setActiveModal,
  isLoading,
  errorMessage,
  formData,
  onConfirm,
}: DepositModalsProps) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        {activeModal === "confirmation" && (
          <>
            <h2 className="text-xl font-bold mb-4">Konfirmasi Setor Limbah</h2>
            <div className="space-y-2">
              <p>
                <strong>Nama:</strong> {formData.name}
              </p>
              <p>
                <strong>Jenis Limbah:</strong> {formData.waste_type}
              </p>
              <p>
                <strong>Metode Setor:</strong> {formData.pickup_method}
              </p>
              <p>
                <strong>Berat Limbah:</strong> {formData.waste_weight} Kg
              </p>
            </div>
            <div className="mt-6 flex justify-between gap-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setActiveModal(null)}
                disabled={isLoading}
              >
                Batal
              </Button>
              <Button
                className="w-full"
                variant="normal"
                onClick={onConfirm}
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Konfirmasi"}
              </Button>
            </div>
          </>
        )}

        {activeModal === "success" && (
          <div className="text-center">
            <Image src={MaskotBerhasil} alt="maskot" className="mx-auto mb-4" />
            <h2 className="text-lg font-bold mb-2">
              Hore! Anda telah berhasil melakukan setor limbah!
            </h2>
            <Button
              variant="normal"
              className="w-full"
              onClick={() => setActiveModal(null)}
            >
              Tutup
            </Button>
          </div>
        )}

        {activeModal === "error" && (
          <div className="text-center">
            {errorMessage.includes("login") ||
            errorMessage.includes("token") ? (
              <Image
                src={MaskotGagal}
                alt="maskot"
                className="mx-auto mb-4"
                width={200}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            )}

            <h2 className="text-sm font-bold mb-2">
              {errorMessage.includes("login") || errorMessage.includes("token")
                ? "Yah, Anda belum masuk sehingga tidak dapat melakukan setor limbah!"
                : "Gagal Menyetor Limbah"}
            </h2>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  if (
                    errorMessage.includes("login") ||
                    errorMessage.includes("token")
                  ) {
                    redirect("/login"); // Redirect ke halaman login
                  }
                  setActiveModal(null); // Tutup modal
                }}
              >
                {errorMessage.includes("login") ||
                errorMessage.includes("token")
                  ? "Ke Halaman Login"
                  : "Tutup"}
              </Button>

              {!(
                errorMessage.includes("login") || errorMessage.includes("token")
              ) && (
                <Button
                  variant="normal"
                  className="w-full"
                  onClick={() => setActiveModal("confirmation")}
                >
                  Coba Lagi
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
