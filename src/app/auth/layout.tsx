export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}