Kingdom Factor Website: Admin and CMS Access Guide (for John and Jim)

Your website content is managed through a built-in admin dashboard (your CMS). Here is how to log in, add a teammate, and connect your AI assistant. It takes about 10 minutes.

ADMIN DASHBOARD LINK
https://www.purpose-drivenconsulting.net/_emdash/admin
This is where you log in any time to edit your site. Bookmark it.

A few things to know first:
- Login uses a passkey (Face ID, fingerprint, or your device PIN). There is no password to remember.
- A passkey is tied to this exact web address and to the device you set it up on. Use the same device to log in, or add a passkey on each device you use.

STEP 1: Get into your account (first time)
The TAM team will send you an invite.
1. Open the invite link they send you.
2. Enter your name if asked.
3. When prompted, create your passkey. Your device will ask for Face ID, fingerprint, or your PIN. Confirm it.
4. You are in.

STEP 2: Log in (every time after that)
1. Go to https://www.purpose-drivenconsulting.net/_emdash/admin
2. Choose Sign in and confirm with your passkey (Face ID, fingerprint, or PIN).

STEP 3: Add a teammate (optional)
1. In the dashboard, open the Team section.
2. Click Invite, enter their email, choose a role (Admin gives full access, Editor gives content-only access), and send.
3. They receive an invite link. When they open it, they create their own passkey and they are in.

STEP 4: Create an API key for your AI assistant (Wendy)
This lets your AI assistant read and update your website for you.
1. In the dashboard, open the Developer section (Personal Access Tokens).
2. Click Create a new token.
3. Name it something clear, such as: Wendy (Hermes)
4. Give it the permissions your assistant needs: Content read and Content write. Add Media read and Media write if Wendy will also upload images.
5. Click Create, then copy the key right away. It starts with ec_pat_ and is only shown once. Store it somewhere safe.
6. Provide that key, along with this connection address, to your assistant's setup:
   Connection address: https://www.purpose-drivenconsulting.net/_emdash/api/mcp
   Wendy uses the key as her access token to connect to that address.

Good to know
- If you ever lose access to your device, any Admin can re-invite you and you set up a new passkey.
- Treat the ec_pat_ key like a password. If it is ever exposed, delete it in the Developer section and create a new one. The old one stops working immediately.
- You can create separate keys for different tools and revoke any single one without affecting the others.

Questions? Reach out to the TAM team and we will walk you through any step.
