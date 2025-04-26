"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/api/services/auth";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.email || !formData.password || !formData.first_name) {
      setError("Harap isi semua field yang wajib diisi");
      setLoading(false);
      return;
    }

    try {
      const response = await registerUser(formData);
      if (response.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat registrasi");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span className="font-bold">Nama Lengkap</span>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Input
            name="first_name"
            placeholder="nama depan"
            value={formData.first_name}
            onChange={handleChange}
            variant="normal"
            required
          />
          <Input
            name="last_name"
            placeholder="nama belakang"
            value={formData.last_name}
            onChange={handleChange}
            variant="normal"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className="font-bold">Email</span>
        <Input
          name="email"
          type="email"
          placeholder="email"
          className="mt-2"
          value={formData.email}
          onChange={handleChange}
          variant="normal"
          required
        />
      </div>

      <div className="mt-4">
        <div className="font-bold flex justify-between">
          <span>Kata Sandi</span>
        </div>
        <Input
          name="password"
          type="password"
          placeholder="password"
          className="mt-2"
          value={formData.password}
          onChange={handleChange}
          variant="normal"
          required
        />
      </div>

      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      {success && (
        <div className="mt-4 text-green-500 text-sm">
          Registrasi berhasil! Mengarahkan ke login...
        </div>
      )}

      <div className="flex items-center mt-4 gap-2">
        <p className="text-sm">
          Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan
          Privasi.
        </p>
      </div>

      <Button
        className="w-full my-4"
        variant="light"
        type="submit"
        disabled={loading}
      >
        {loading ? "Memproses..." : "Daftar"}
      </Button>

      <span className="mt-4 flex gap-x-2 text-center w-full">
        Sudah punya akun?
        <Link href="/login" className="font-semibold text-normal">
          Masuk
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
