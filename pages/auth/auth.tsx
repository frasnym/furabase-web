'use client'

import { useState } from "react";

import SignIn from "./signin";

export default function Auth() {
    // TODO: If authenticated, redirect to dashboard

    const [form, setForm] = useState<"SignIn" | "SignUp">("SignIn")

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            {form === "SignIn" ? (
                <SignIn />
            ) : null
            }
        </main>
    )
}