"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm opacity-70">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md bg-navy text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-navy/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 text-navy"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
