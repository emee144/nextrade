# NexTrade

NexTrade is a modern crypto trading platform built with **Next.js** and **MySQL**, featuring secure authentication, animated UI transitions, referral tracking, and automatic blockchain address generation on user signup.

---

## Features

- Authentication System
  - Login and Signup with email and password
  - Secure cookie-based authentication
  - Remember Me support
  - Forgot Password flow

- Modern UI / UX
  - Built with Next.js App Router
  - Framer Motion animations for smooth transitions
  - Responsive design with mobile hamburger menu
  - Tailwind CSS styling

- Referral System
  - Supports 8-digit referral codes
  - Referral codes stored via URL query (`?ref=XXXXXXXX`)
  - Automatically saved using `localStorage`

- Wallet Address Generation
  - Automatically generates crypto addresses on signup
  - Supports:
    - TRON (TRX / USDT-TRC20)
    - Ethereum (ETH / ERC20)
  - Addresses are linked to user accounts in the database

- Fast and Secure
  - Client-side hydration safe
  - Protected routes
  - Authentication check on page load

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Backend
- Next.js API Routes
- MySQL
- JWT Authentication
- HTTP-only Cookies

---

## Project Structure

