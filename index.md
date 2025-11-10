# Digits - Contact Management Application

<img src="doc/landing.png">

Digits is a contact management application built with Next.js 14 that allows users to create, view, edit, and organize their personal and professional contacts. The application includes a notes system for each contact and administrative features for managing all contacts.

## Key Features

- **Contact Management**: Add, edit, and view detailed contact information including name, address, image, and description
- **Notes System**: Add timestamped notes to any contact for better relationship management
- **User Authentication**: Secure login and registration system with role-based access
- **Admin Dashboard**: Administrative users can view and manage all contacts across the system
- **Bootstrap UI**: Clean, responsive interface using React Bootstrap components
- **Database Integration**: PostgreSQL database with Prisma ORM for reliable data management

## Technology Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [Bootstrap 5 React](https://react-bootstrap.github.io/) - UI components and styling
- [React Hook Form](https://www.react-hook-form.com/) - Form validation and management
- [NextAuth.js](https://next-auth.js.org/) - Authentication and authorization
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Prisma](https://www.prisma.io/) - Database ORM and migrations
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](http://eslint.org) - Code quality and style enforcement

## Installation

### Prerequisites

First, [install PostgreSQL](https://www.postgresql.org/download/) and create a database for the application:

```bash
createdb digits
```

### Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd digits
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file from the `sample.env` and set the `DATABASE_URL` to match your PostgreSQL database:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/digits"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database:**
   ```bash
   npx prisma db push
   ```

5. **Seed the database with initial data:**
   ```bash
   npx prisma db seed
   ```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Default Accounts

The application comes with two default accounts:
- **Admin**: `admin@foo.com` / `changeme`
- **User**: `john@foo.com` / `changeme`

## Application Walkthrough

### Landing Page

The application landing page welcomes users and provides navigation to sign in or register for a new account.

<img src="doc/landing.png">

### Authentication

Users can sign in with existing credentials or register for a new account. The authentication system uses NextAuth.js with secure password hashing.

<img src="doc/signin.png">

### Contact Management

Once logged in, users can:

#### Add New Contacts
- Navigate to "Add Contact" to create new contact entries
- Fill in contact details: first name, last name, address, image URL, and description
- Form validation ensures all required fields are completed

<img src="doc/addContact.png">

#### List Contacts
- View all contacts you've created in a organized list format
- Each contact shows their image, name, and description
- Quick access to edit or view detailed contact information

<img src="doc/list.png">

#### Edit Contacts
- Modify existing contact information
- Update any field including personal details and contact image
- Changes are saved immediately to the database

<img src="doc/edit.png">

#### Contact Notes
- Add timestamped notes to any contact
- Perfect for tracking conversations, meetings, or important information
- Notes are displayed chronologically for each contact

### Administrative Features

Users with admin privileges have additional capabilities:

#### Admin Dashboard
- View all contacts created by all users in the system
- Comprehensive overview of the entire contact database
- Administrative controls for system-wide contact management

<img src="doc/adminlist.png">

## Database Schema

The application uses three main database tables:

### User Table
- `id`: Unique identifier
- `email`: User email address (unique)
- `password`: Hashed password using bcrypt
- `role`: User role (USER or ADMIN)

### Contact Table
- `id`: Unique identifier
- `firstName`: Contact's first name
- `lastName`: Contact's last name
- `address`: Contact's address
- `image`: URL to contact's image
- `description`: Contact description
- `owner`: Email of the user who created the contact

### Note Table
- `id`: Unique identifier
- `note`: Note content
- `contactId`: Reference to associated contact
- `owner`: Email of the user who created the note
- `createdAt`: Timestamp of note creation

## Code Quality

The application maintains high code quality standards:

### ESLint
Run code quality checks:
```bash
npm run lint
```

The application follows Next.js and AirBnB JavaScript style guides with custom ESLint rules.
