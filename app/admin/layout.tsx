import Footer from "@/components/footer";

export default function AdminLayout({children}:{children:React.ReactNode}){
    return (
    <html lang="en">
      <body>{children}</body>
      <Footer/>
    </html>
    )

}