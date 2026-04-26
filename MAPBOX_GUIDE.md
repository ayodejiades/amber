# Mapbox Setup Guide for Amber

To enable real-time mapping in the Amber demo, follow these steps to obtain and configure your Mapbox Access Token.

## 1. Create a Mapbox Account
Go to [mapbox.com](https://www.mapbox.com/) and sign up for a free account. Mapbox has a generous free tier for development.

## 2. Generate an Access Token
1. Log in to your [Mapbox Dashboard](https://account.mapbox.com/).
2. Look for the **"Access tokens"** section.
3. You can use the `Default public token` already provided, or create a new one by clicking **"Create a token"**.
4. Copy the token (it should start with `pk.`).

## 3. Configure Amber
1. Create a `.env.local` file in the root of the `amber` project (copy from `.env.example`).
2. Paste your token:
   ```env
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
   ```
3. Restart the development server (`npm run dev`).

## Fallback Mode
If no token is provided, the system will automatically fall back to **Simulation HUD Mode**, which uses animated mock maps to ensure the demo still looks professional.
