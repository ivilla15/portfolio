"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, User } from "lucide-react";

/**
 * Hard-coded staff info
 */
const ME = {
  name: "Isaiah Villalobos",
  title: "Junior Web Developer Associate",
  head: "University-Student Union",
  pronouns: "he/him",
  email: "ivilla.devcs@gmail.com",
  phone: "(323) 540-0532",
  bio: "React/Next.js at Cal State LA U-SU. Accessibility, design systems, and DX.",
  imgSrc:
    "https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/Professional%20Photo.webp",
  imgAlt: "Portrait of Isaiah Villalobos",
  slug: "isaiah-villalobos",
};

export default function StaffCardWithModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  // Focus close button on open
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  return (
    <>
      {/* Card */}
      <button
        type="button"
        aria-label="Open staff details"
        onClick={openModal}
        className="group w-[304px] h-[512px] cursor-pointer rounded-2xl border border-zinc-200 bg-white p-0 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
      >
        <div className="flex h-full flex-col justify-between p-4 text-center">
          <div>
            {ME.head ? (
              <span className="mb-1 block text-sm font-bold tracking-wide text-yellow-600">
                {ME.head}
              </span>
            ) : null}
            <h2 className="text-base font-extrabold leading-tight text-yellow-700">
              {ME.title}
            </h2>
          </div>

          <div className="mt-2 flex flex-col items-center">
            <Image
              src={ME.imgSrc}
              alt={ME.imgAlt}
              width={220}
              height={245}
              className="h-[245px] w-[220px] rounded-xl object-cover"
              priority
            />
            <div className="mt-3 h-20">
              <p className="text-sm font-extrabold text-zinc-900">{ME.name}</p>
            </div>
          </div>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="staff-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-[95vw] overflow-auto rounded-2xl bg-white p-6 shadow-xl focus:outline-none sm:p-8">
            {/* Close */}
            <div className="mb-4 flex items-center justify-end">
              <button
                ref={closeButtonRef}
                onClick={closeModal}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              >
                Close
              </button>
            </div>

            {/* Upper container */}
            <div className="mx-auto flex w-full max-w-[800px] flex-col gap-6 sm:flex-row">
              {/* Image */}
              <div className="flex-shrink-0 sm:mr-6">
                <Image
                  src={ME.imgSrc}
                  alt={ME.imgAlt}
                  width={220}
                  height={245}
                  className="h-[245px] w-[220px] rounded-xl object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex max-w-[400px] flex-1 flex-col items-center">
                <div className="mb-2 flex flex-col items-center">
                  <h1
                    id="staff-modal-title"
                    className="text-2xl font-extrabold leading-none text-zinc-900"
                  >
                    {ME.name}
                  </h1>
                  {ME.pronouns ? (
                    <p className="mt-1 text-sm text-zinc-500">{ME.pronouns}</p>
                  ) : null}
                  <p className="mt-2 text-base font-extrabold leading-tight text-yellow-700">
                    {ME.title}
                  </p>
                </div>

                {/* Contact */}
                <div className="mt-4 w-full">
                  {/* Email */}
                  <div className="mb-3 flex items-center text-left">
                    <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                      <Mail className="h-4 w-4 text-white" aria-hidden />
                    </div>
                    <span className="text-sm text-zinc-800">{ME.email}</span>
                  </div>

                  {/* Phone */}
                  {ME.phone ? (
                    <div className="mb-3 flex items-center text-left">
                      <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                        <Phone className="h-4 w-4 text-white" aria-hidden />
                      </div>
                      <span className="text-sm text-zinc-800">{ME.phone}</span>
                    </div>
                  ) : null}

                  {/* Bio */}
                  {ME.bio ? (
                    <div className="mb-3 flex items-center text-left">
                      <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                        <User className="h-4 w-4 text-white" aria-hidden />
                      </div>
                      <span className="text-sm text-zinc-800">{ME.bio}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* QR + Link */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="mb-3">
                <Link
                  href={`/staff/${ME.slug}`}
                  className="underline decoration-dotted underline-offset-4 transition hover:text-zinc-700"
                >
                  <span className="text-sm text-zinc-800">
                    View Virtual Card
                  </span>
                </Link>
              </div>
              <QRCodeSVG value={`https://www.ivilla.dev/card`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
