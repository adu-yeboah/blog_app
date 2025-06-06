import React from 'react';
import { Head } from '@inertiajs/react';

export default function EmailsList({ subscribedEmails = [] }) {
  return (
    <div className="min-w-[20vw] mr-11 p-4">
      <Head title="Subscribed Emails" />
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Subscribed Emails</h2>
          <p className="text-sm text-gray-500 mt-1">
            Total: {subscribedEmails.length}
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {subscribedEmails.length > 0 ? (
            subscribedEmails.map((email, index) => (
              <div key={index} className="px-4 py-3">
                <div className="text-sm text-gray-800 font-mono">{email}</div>
              </div>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              No subscribed emails yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}