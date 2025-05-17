import React, { useState } from "react";
import { AlertCircle, Loader, Lock, LogIn, User } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function LoginPage() {

    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault()
        post('auth/login')
    }

    return (
        <form
            onSubmit={submit}
            className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    {errors?.username && <div className="text-red-700 text-sm">{errors.username}</div>}
                    <div className="mt-1 relative">
                        <input
                            id="username"
                            type="text"
                            value={data.username}
                            onChange={(e) => setData("username", e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter username"
                            required
                        />
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    {errors?.password && <div className="text-red-700 text-sm">{errors.password}</div>}
                    <div className="mt-1 relative">
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter password"
                            required
                        />
                        <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full bg-green-900 cursor-pointer text-white py-2 rounded-md hover:bg-green-600 flex items-center justify-center ${processing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {processing ? (
                        <>
                            <Loader className="w-5 h-5 mr-2 animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        <>
                            <LogIn className="w-5 h-5 mr-2" />
                            Log In
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}