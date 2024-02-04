import React from "react";

export default function TermsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="w-screen px-16 max-sm:px-6 pt-[calc(5rem+32px)] max-md:pt-[calc(3.25rem+1.5rem)] pb-14">
      { children }
    </section>
  )
}