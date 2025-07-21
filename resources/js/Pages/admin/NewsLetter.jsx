import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import Head from '../../components/ui/Head';
import { useForm } from '@inertiajs/react';

const NewsletterIndex = ({ subscribers }) => {
    const { data, setData, post, processing, errors } = useForm({
        subject: '',
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.subject || !data.content) {
            alert('Please enter a subject and content.');
            return;
        }
        post('/newsletter/send', {
            onSuccess: () => {
                setData({ subject: '', content: '' });
                alert('Newsletter sent successfully!');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100 p-6">
                <Head title="Newsletter Management" />
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">

                    <div className="mb-8">

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        placeholder="Enter newsletter subject"
                                    />
                                    {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Content</label>
                                    <textarea
                                        name="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                        rows="6"
                                        placeholder="Enter newsletter content"
                                    />
                                    {errors.content && <p className="text-red-600 text-sm">{errors.content}</p>}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className={`w-full bg-green-800 cursor-pointer text-white font-medium py-2 px-4 rounded-md ${processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                                    >
                                        {processing ? 'Sending...' : 'Send Newsletter'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Subscribers</h3>
                    {subscribers.length === 0 ? (
                        <p className="text-gray-600">No subscribers yet.</p>
                    ) : (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 text-left">Email</th>
                                    <th className="p-2 text-left">Subscribed At</th>
                                    <th className="p-2 text-left">Verified At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map((subscriber) => (
                                    <tr key={subscriber.id} className="border-b">
                                        <td className="p-2">{subscriber.email}</td>
                                        <td className="p-2">{subscriber.subscribed_at || 'Pending'}</td>
                                        <td className="p-2">{subscriber.verified_at || 'Not Verified'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default NewsletterIndex;