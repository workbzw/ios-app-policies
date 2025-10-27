export interface AppConfig {
  id: string;
  name: string;
  description: string;
  icon?: string;
  documents: {
    privacyPolicy?: boolean;
    termsOfService?: boolean;
    userAgreement?: boolean;
  };
}

export const apps: AppConfig[] = [
  {
    id: "aidimsum",
    name: "AiDimsum",
    description: "AI-powered dimsum ordering and discovery app",
    documents: {
      privacyPolicy: true,
      termsOfService: false,
      userAgreement: false,
    },
  },
  // Add more apps here as needed
  // Example: Uncomment and customize the following to add more apps
  // {
  //   id: "my-android-app",
  //   name: "My Android App",
  //   description: "A sample Android application",
  //   documents: {
  //     privacyPolicy: true,
  //     termsOfService: true,
  //     userAgreement: false,
  //   },
  // },
];

export function getAppById(id: string): AppConfig | undefined {
  return apps.find((app) => app.id === id);
}

export function getAllApps(): AppConfig[] {
  return apps;
}

