# Event Management API (Express + MongoDB)

A clean, production-ready backend for user authentication and event management.
- JWT issued and stored in **httpOnly** cookies
- Protected routes with ownership checks
- Request validation (express-validator)
- Clear folder structure and helpful middleware

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # edit .env with your values
   ```

3. **Run MongoDB**
   - Local: `mongod`
   - Or use a MongoDB Atlas connection string in `MONGO_URI`.

4. **Start the server**
   ```bash
   npm run dev
   ```

**Base URL**: `http://localhost:5000` (unless you change `PORT`).

## API Endpoints

### Auth
- `POST /api/auth/register` — body: `{ name, email, password, phoneNumber }`
- `POST /api/auth/login` — body: `{ email, password }`
- `POST /api/auth/logout` — clears cookie

### Users
- `GET /api/users/me` — returns logged-in user's profile
- `PATCH /api/users/me` — body: `{ name?, phoneNumber? }`

### Events (protected)
- `POST /api/events` — body: `{ title, description, date, time, location, organizerName, eventBanner }`
- `GET /api/events` — list all
- `GET /api/events/:id` — get by id
- `PATCH /api/events/:id` — **only creator** can update
- `DELETE /api/events/:id` — **only creator** can delete

### Auth details
- Token is set in an httpOnly cookie named `token`.
- For local dev, set `COOKIE_SECURE=false` in `.env` so cookies work over http.

## Project Structure
```text
src/
  config/db.js
  index.js
  app.js
  controllers/
  models/
  routes/
  middleware/
  utils/
  validators/
```

## Notes
- Validate inputs with `express-validator`.
- Ownership enforced in event update/delete.
- CORS configured via `CORS_ORIGIN` in `.env`.
