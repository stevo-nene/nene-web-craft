
import { BlogPost } from "@/components/blog-card";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Secure Web Applications: Best Practices",
    slug: "building-secure-web-applications",
    excerpt: "Learn the essential security practices every developer should implement to protect web applications from common vulnerabilities and attacks.",
    date: "May 5, 2025",
    readTime: "8 min read",
    tags: ["Security", "Web Development", "OWASP"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
  },
  {
    id: "2",
    title: "Modern State Management in React Applications",
    slug: "modern-state-management-react",
    excerpt: "An exploration of state management patterns in React, comparing Context API, Redux, Zustand, and Jotai with practical examples.",
    date: "Apr 20, 2025",
    readTime: "6 min read",
    tags: ["React", "JavaScript", "State Management"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
  },
  {
    id: "3",
    title: "Implementing JWT Authentication with Node.js and Express",
    slug: "jwt-authentication-node-express",
    excerpt: "A step-by-step guide to implementing secure JWT authentication in your Node.js applications with best practices for token management.",
    date: "Apr 10, 2025",
    readTime: "10 min read",
    tags: ["Node.js", "Authentication", "JWT", "Express"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3"
  },
  {
    id: "4",
    title: "Optimizing Database Performance in Full-Stack Applications",
    slug: "optimizing-database-performance",
    excerpt: "Discover practical techniques to improve database performance, from indexing and query optimization to caching strategies.",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    tags: ["Database", "Performance", "MongoDB", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3"
  },
  {
    id: "5",
    title: "Creating Accessible Web Applications with React",
    slug: "accessible-web-applications-react",
    excerpt: "Learn how to build inclusive web applications that everyone can use, focusing on ARIA attributes, keyboard navigation, and testing techniques.",
    date: "Mar 12, 2025",
    readTime: "9 min read",
    tags: ["Accessibility", "React", "ARIA", "UX"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3"
  }
];

export const getPost = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostContent = (slug: string) => {
  return {
    title: getPost(slug)?.title || "",
    content: `
    ## Introduction

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    ## Main Concepts

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    ### Key Point 1

    - Item 1
    - Item 2
    - Item 3

    ### Key Point 2

    \`\`\`javascript
    // Example code
    function example() {
      const data = fetchData();
      return processData(data);
    }
    \`\`\`

    ## Conclusion

    In conclusion, this approach provides several benefits and can be implemented in various scenarios. For further reading, check out the links in the references section.

    ## References

    1. [Reference 1](https://example.com)
    2. [Reference 2](https://example.org)
    `
  };
};
