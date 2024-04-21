export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="bg-pink-300 min-h-screen">
      {children}
    </div>
  )
}