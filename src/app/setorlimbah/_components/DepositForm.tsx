// src/app/setor-limbah/components/DepositForm.tsx
"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { DepositFormData } from "@/type/TAPI";

interface DepositFormProps {
  formData: DepositFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const DepositForm = ({
  formData,
  onChange,
  onSubmit,
}: DepositFormProps) => (
  <form className="flex text-sm flex-col gap-6" onSubmit={onSubmit}>
    <div className="flex items-center">
      <label htmlFor="name" className="font-bold w-3/4 lg:w-1/4">
        Nama Lengkap
      </label>
      <Input
        variant="white"
        className="w-full"
        required
        name="name"
        value={formData.name}
        onChange={onChange}
      />
    </div>

    <div className="flex items-center">
      <label htmlFor="waste_type" className="font-bold w-3/4 lg:w-1/4">
        Jenis Limbah
      </label>
      <select
        id="waste_type"
        className="w-full bg-white p-3 rounded-lg"
        name="waste_type"
        value={formData.waste_type}
        onChange={onChange}
      >
        <option value="">Pilih jenis limbah</option>
        <option value="Limbah Organik Basah">Limbah Organik Basah</option>
        <option value="Limbah Organik Kering">Limbah Organik Kering</option>
        <option value="Limbah Campuran">Limbah Campuran</option>
      </select>
    </div>

    <div className="flex items-center">
      <label htmlFor="pickup_method" className="font-bold w-3/4 lg:w-1/4">
        Metode Setor
      </label>
      <select
        id="pickup_method"
        className="w-full bg-white p-3 rounded-lg"
        name="pickup_method"
        value={formData.pickup_method}
        onChange={onChange}
      >
        <option value="">Pilih metode setor</option>
        <option value="Pick-Up">Pick-Up</option>
        <option value="Drop-Off">Drop-Off</option>
      </select>
    </div>

    <div className="flex items-center">
      <label htmlFor="waste_weight" className="font-bold w-2/5 lg:w-1/5">
        Berat Limbah
      </label>
      <Input
        variant="white"
        className="w-1/5 ms-1"
        type="number"
        required
        name="waste_weight"
        value={formData.waste_weight}
        onChange={onChange}
      />
      <span className="ms-4 font-semibold">Kg</span>
    </div>

    <div className="flex font-semibold items-center justify-end">
      <Button variant="normal" type="submit">
        Setor Limbah
      </Button>
    </div>
  </form>
);
