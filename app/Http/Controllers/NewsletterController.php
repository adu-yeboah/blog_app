<?php

namespace App\Http\Controllers;

use App\Jobs\SubscriberJoinJob;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsletterController extends Controller
{
    public function index()
    {
        // $this->middleware('auth')->only(['index', 'send']);
        $subscribers = Subscriber::all();
        return Inertia::render('admin/NewsLetter', [
            'subscribers' => $subscribers->map(fn($subscriber) => [
                'id' => $subscriber->id,
                'email' => $subscriber->email,
                'subscribed_at' => $subscriber->subscribed_at,
                'verified_at' => $subscriber->verified_at,
            ]),
        ]);
    }

    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:subscribers,email',
        ]);

        try {
            $hash = md5($validated['email']);
            $subscriber = Subscriber::create([
                'email' => $validated['email'],
                'hash' => $hash,
            ]);

            SubscriberJoinJob::dispatch($subscriber);

            return redirect()->back()->with('success', 'Subscribed successfully! Check your email for verification.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to subscribe. Please try again.');
        }
    }

    public function verify(string $hash)
    {
        $subscriber = Subscriber::where('hash', $hash)->firstOrFail();
        $subscriber->update([
            'hash' => md5($subscriber->email), // Regenerate for unsubscribe
            'verified_at' => now(),
            'subscribed_at' => now(),
        ]);

        return redirect('/')->with('success', 'Email verified successfully!');
    }

    public function send(Request $request)
    {
        // $this->middleware('auth');

        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $subscribers = Subscriber::whereNotNull('verified_at')->get();

        if ($subscribers->isEmpty()) {
            return redirect()->back()->with('error', 'No verified subscribers found.');
        }

        foreach ($subscribers as $subscriber) {
            SubscriberJoinJob::dispatch($subscriber, $validated['subject'], $validated['content']);
        }

        return redirect()->back()->with('success', 'Newsletter sent to all verified subscribers!');
    }

    public function unsubscribe(string $hash)
    {
        $subscriber = Subscriber::where('hash', $hash)->firstOrFail();
        $subscriber->delete();
        return redirect('/')->with('success', 'Unsubscribed successfully!');
    }
}
