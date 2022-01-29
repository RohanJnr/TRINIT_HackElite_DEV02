import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
          </div>
      </main>
      <Footer />
    </>
  )
}
