"use client";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/CheckBox";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/api/services/auth";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Harap isi email dan password");
      setLoading(false);
      return;
    }

    try {
      const { data: token, success } = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (success && token) {
        const cookieExpiry = formData.rememberMe
          ? `; max-age=${30 * 24 * 60 * 60}`
          : "";
        document.cookie = `authToken=${token}; path=/${cookieExpiry}; secure; samesite=lax`;
        window.location.reload();
        router.push("/home");
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
          <Link href="/forgot-password" className="text-normal font-light">
            Lupa Kata Sandi?
          </Link>
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

      <div className="flex items-center mt-4 gap-2">
        <Checkbox
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <span>Ingat saya</span>
      </div>

      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      <Button
        className="w-full my-4"
        variant="light"
        type="submit"
        disabled={loading}
      >
        {loading ? "Memproses..." : "Masuk"}
      </Button>

      <span className="mt-4 text-center w-full">
        Belum Punya Akun?{" "}
        <Link href="/register" className="font-semibold text-normal">
          daftar
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
