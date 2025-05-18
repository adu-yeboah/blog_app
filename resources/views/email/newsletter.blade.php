<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $subject }}</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>{{ $subject }}</h2>
        <div>{!! $content !!}</div>
        <p style="text-align: center; margin-top: 20px;">
            <a href="{{ url('/newsletter/unsubscribe') }}" style="color: #888; text-decoration: none;">
                Unsubscribe
            </a>
        </p>
        <p>Best regards,<br>Your App Team</p>
    </div>
</body>
</html>