
import { ReactNode } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title = "Steve Nene | Full-Stack Developer", description = "Full-Stack Software Developer & Cybersecurity Enthusiast" }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
