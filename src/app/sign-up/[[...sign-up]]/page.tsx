import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-custom">
      <div className="w-full max-w-md p-6">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90',
              card: 'bg-white/5 backdrop-blur-sm border border-white/10',
              headerTitle: 'text-white',
              headerSubtitle: 'text-gray-300',
              formFieldLabel: 'text-gray-300',
              formFieldInput: 'bg-white/5 border-white/10 text-white',
              dividerLine: 'bg-white/10',
              dividerText: 'text-gray-300',
              footerActionLink: 'text-accent-blue hover:text-accent-purple',
            },
          }}
        />
      </div>
    </main>
  );
}
