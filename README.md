# Privacy Policy & Legal Documents Hub

A centralized Next.js application for managing privacy policies and legal documents across multiple applications.

## 📋 Features

- **Multi-App Support**: Manage privacy policies for multiple applications in one place
- **Modern UI**: Beautiful, responsive design with dark mode support
- **Easy Navigation**: Clean interface to browse all apps and their legal documents
- **Scalable Structure**: Simple configuration-based system to add new apps
- **SEO Friendly**: Built with Next.js 16 for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
app/
├── apps-config.ts          # Configuration file for all apps
├── page.tsx                # Home page listing all apps
├── layout.tsx              # Root layout
└── [app-name]/             # Each app has its own directory
    ├── privacy-policy/     # Privacy policy page
    │   └── page.tsx
    ├── terms-of-service/   # Terms of service (optional)
    │   └── page.tsx
    └── user-agreement/     # User agreement (optional)
        └── page.tsx
```

## ➕ Adding a New App

### Step 1: Update Configuration

Edit `app/apps-config.ts` and add your new app to the `apps` array:

```typescript
{
  id: "your-app-id",           // Used in URL: /your-app-id/privacy-policy
  name: "Your App Name",       // Display name
  description: "App description",
  documents: {
    privacyPolicy: true,       // Enable privacy policy
    termsOfService: false,     // Enable terms of service (optional)
    userAgreement: false,      // Enable user agreement (optional)
  },
}
```

### Step 2: Create App Directory

```bash
mkdir -p app/your-app-id/privacy-policy
```

### Step 3: Create Privacy Policy Page

Copy the template from `app/my-ios-app/privacy-policy/page.tsx` to your new app directory and customize the content:

```bash
cp app/my-ios-app/privacy-policy/page.tsx app/your-app-id/privacy-policy/page.tsx
```

### Step 4: Customize Content

Edit the new file and update:
- App name in the header badge
- Contact information
- Any specific privacy policy details
- Footer text

## 📄 Available Document Types

The system supports three types of legal documents:

1. **Privacy Policy** (`/[app-id]/privacy-policy`)
   - How data is collected, used, and protected
   - User rights and data management
   - GDPR and CCPA compliance information

2. **Terms of Service** (`/[app-id]/terms-of-service`)
   - Terms and conditions of use
   - User responsibilities
   - Service limitations

3. **User Agreement** (`/[app-id]/user-agreement`)
   - Contractual agreements
   - Usage terms
   - Legal obligations

## 🎨 Customization

### Styling

The project uses Tailwind CSS v4 for styling. You can customize:
- Colors in `app/globals.css`
- Component styles in individual page files
- Dark mode variants are included by default

### App Icons

Update the app icon in the home page by modifying the icon generation logic in `app/page.tsx`:

```tsx
<div className="bg-gradient-to-br from-blue-500 to-purple-600">
  {app.name.charAt(0)}
</div>
```

Or add custom icons to the `AppConfig` interface.

## 🌐 Routes

- `/` - Home page with all apps
- `/[app-id]/privacy-policy` - Privacy policy for specific app
- `/[app-id]/terms-of-service` - Terms of service for specific app
- `/[app-id]/user-agreement` - User agreement for specific app

## 📱 Example Apps

### My iOS App
- **URL**: `/my-ios-app/privacy-policy`
- **Documents**: Privacy Policy

To view the example, navigate to `http://localhost:3000/my-ios-app/privacy-policy`

## 🔒 Privacy Policy Template

The included privacy policy template covers:
- Information collection practices
- Data usage and sharing
- Security measures
- User rights (GDPR, CCPA)
- Children's privacy
- International data transfers
- Contact information

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: v19.2.0

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

To add a new app:
1. Update `apps-config.ts`
2. Create the app directory
3. Add the privacy policy page
4. Test locally
5. Deploy

## 📧 Support

For questions or issues, please contact your development team.

---

© 2025 All rights reserved.
