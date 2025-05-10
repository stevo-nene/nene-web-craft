
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout";
import { getPost, getPostContent } from "@/data/blog-posts";
import { ChevronLeft, CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import BlogCard, { BlogPost } from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug || "");
  const { content } = post ? getPostContent(post.slug) : { content: "" };
  
  // Get related posts (posts with similar tags, excluding current one)
  const getRelatedPosts = (): BlogPost[] => {
    if (!post) return [];
    
    const relatedPosts = blogPosts
      .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
      .slice(0, 3);
      
    return relatedPosts;
  };
  
  const relatedPosts = getRelatedPosts();
  
  if (!post) {
    return (
      <Layout title="Blog Post Not Found | Steve Nene">
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blogs">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${post.title} | Steve Nene`}
      description={post.excerpt}
    >
      <section className="pt-24 pb-16">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/blogs" 
              className="flex items-center text-primary hover:underline mb-4"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <CalendarIcon className="h-4 w-4" />
              <span>{post.date} • {post.readTime}</span>
            </div>
          </div>
          
          <div className="aspect-video mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            {/* Content would ideally be markdown rendered */}
            {content.split('\n').map((paragraph, index) => (
              paragraph.trim() ? <p key={index}>{paragraph}</p> : null
            ))}
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
