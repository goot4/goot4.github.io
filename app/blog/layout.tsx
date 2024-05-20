export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="pt-16 bg-pink-300 min-h-screen">
      {children}
    </div>
  )
}