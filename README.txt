Luminia — Vercel-ready project
==============================

What's included:luminia (repo root)
│
├── index.html        ← The main front-end page (what loads in the browser)
├── public/           ← Static assets (images, icons, CSS, JS files)
├── api/              ← Serverless backend functions
│     sendMessage.js  ← Handles messages from your app
│     other functions… (if any)
└── other files…      ← Optional, e.g., README.md, package.json if used

Quick deploy steps:
1. Create a GitHub repo and push these files to the root folder.
2. Go to https://vercel.com and import the GitHub repo (New Project -> Import).
3. In Vercel Project Settings -> Environment Variables, add:
   - OPENAI_API_KEY = your_openai_api_key_here
4. Click Deploy. After build, your site will be live at https://<your-project>.vercel.app
5. Open the site, type a message, and the app will call the /api/chat serverless function.

Notes & safety:
- Do NOT commit your API key to GitHub. Use Vercel's Environment Variables to keep it safe.
- The serverless function uses model gpt-4o-mini by default. You can change it in api/chat.js.
- If you want the AI voice/personality adjusted, edit the prompt inside api/chat.js.
