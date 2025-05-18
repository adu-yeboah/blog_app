<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verify Your Subscription</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Welcome to Our Newsletter!</h2>
        <p>Thank you for subscribing. Please verify your email by clicking the button below:</p>
        <p style="text-align: center;">
            <a href="{{ route('newsletter.verify', $subscriber->hash) }}" style="display: inline-block; padding: 10px 20px; background-color: #3490dc; color: white; text-decoration: none; border-radius: 5px;">
                Verify Email
            </a>
        </p>
        <p>If the button doesn't work, copy and paste this link into your browser:</p>
        <p>{{ route('newsletter.verify', $subscriber->hash) }}</p>
        <p>Best regards,<br>Your App Team</p>
    </div>
</body>
</html>