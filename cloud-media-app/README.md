# Cloud Media App

## Overview
The Cloud Media App is a web application that allows users to store, manage, and share their media files, including photos and videos. It mimics the functionality of popular cloud storage services like OneDrive and Google Photos, providing features such as user authentication, media synchronization, and tiered membership options.

## Features
- **User Authentication**: Users can log in using their Google or Microsoft accounts, or create an account using their email.
- **Signup Page**: New users can easily sign up for an account.
- **Dashboard**: A user-friendly dashboard with tabs for navigating between photos, videos, and folders.
- **Media Sync**: Users can sync their media files to the cloud seamlessly.
- **Pro Version**: Offers tiered membership options for users who want additional features.
- **Admin Management**: Admins can log in to manage users and oversee the application.

## Project Structure
```
cloud-media-app
├── public
│   └── index.html
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── api
│   │   ├── auth.ts
│   │   ├── media.ts
│   │   └── admin.ts
│   ├── components
│   │   ├── auth
│   │   │   ├── LoginForm.tsx
│   │   │   ├── OAuthButtons.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── dashboard
│   │   │   ├── Tabs.tsx
│   │   │   ├── PhotoGrid.tsx
│   │   │   ├── VideoGrid.tsx
│   │   │   └── FolderList.tsx
│   │   ├── media
│   │   │   ├── UploadButton.tsx
│   │   │   ├── SyncStatus.tsx
│   │   │   └── MediaItem.tsx
│   │   ├── pro
│   │   │   └── PricingCards.tsx
│   │   └── admin
│   │       ├── AdminLogin.tsx
│   │       └── UserTable.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── ProPage.tsx
│   │   └── AdminDashboard.tsx
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useMediaSync.ts
│   │   └── usePagination.ts
│   ├── context
│   │   ├── AuthContext.tsx
│   │   └── MediaContext.tsx
│   ├── services
│   │   ├── storageService.ts
│   │   └── billingService.ts
│   ├── utils
│   │   ├── validators.ts
│   │   └── helpers.ts
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── index.ts
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cloud-media-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.