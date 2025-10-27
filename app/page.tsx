import Link from "next/link";
import { getAllApps } from "./apps-config";

export default function Home() {
  const apps = getAllApps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl mb-4">
            Privacy Policy & Legal Documents
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Access privacy policies and legal agreements for all our applications. 
            We are committed to protecting your privacy and ensuring transparency.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group relative rounded-2xl bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-8">
                {/* App Icon Placeholder */}
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl">
                  {app.name.charAt(0)}
                </div>

                {/* App Info */}
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {app.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {app.description}
                </p>

                {/* Available Documents */}
                <div className="space-y-3">
                  {app.documents.privacyPolicy && (
                    <Link
                      href={`/${app.id}/privacy-policy`}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group/link"
                    >
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        Privacy Policy
                      </span>
                      <svg
                        className="w-5 h-5 text-zinc-500 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}

                  {app.documents.termsOfService && (
                    <Link
                      href={`/${app.id}/terms-of-service`}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group/link"
                    >
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        Terms of Service
                      </span>
                      <svg
                        className="w-5 h-5 text-zinc-500 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}

                  {app.documents.userAgreement && (
                    <Link
                      href={`/${app.id}/user-agreement`}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group/link"
                    >
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        User Agreement
                      </span>
                      <svg
                        className="w-5 h-5 text-zinc-500 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* Add New App Card */}
          <div className="relative rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border-2 border-dashed border-zinc-300 dark:border-zinc-700 p-8 flex flex-col items-center justify-center min-h-[320px] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Add New App
              </h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                Edit apps-config.ts to add more applications
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
            All legal documents are available in English.
          </p>
        </div>
      </div>
    </div>
  );
}
