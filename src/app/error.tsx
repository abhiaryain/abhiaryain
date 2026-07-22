"use client";

import { ErrorPage } from "@/components/error-page";

export default function RootError() {
  return (
    <ErrorPage
      status={500}
      message="We&apos;re sorry, something went wrong on our end."
    />
  );
}
