<?php

namespace App\Jobs;

use App\Mail\Newsletter;
use App\Mail\SubscriberJoin;
use App\Models\Subscriber;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SubscriberJoinJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Subscriber $subscriber,
        public ?string $subject = null,
        public ?string $content = null
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($this->subject && $this->content) {
            Mail::to($this->subscriber->email)->send(new Newsletter($this->subject, $this->content));
        } else {
            Mail::to($this->subscriber->email)->send(new SubscriberJoin($this->subscriber));
        }
    }
}
