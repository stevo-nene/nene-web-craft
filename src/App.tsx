
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "@/pages/Index";
import AllProjects from "@/pages/projects/AllProjects";
import ProjectDetail from "@/pages/projects/ProjectDetail";
import BlogList from "@/pages/blogs/BlogList";
import BlogPost from "@/pages/blogs/BlogPost";
import Contact from "@/pages/contact/Contact";
import Resume from "@/pages/resume/Resume";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Steve Nene | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Steve Nene, Full-Stack Software Developer & Cybersecurity Enthusiast" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
