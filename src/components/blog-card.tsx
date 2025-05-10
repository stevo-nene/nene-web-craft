
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex gap-2 flex-wrap mb-2">
          {post.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <CardTitle className="hover:text-primary transition-colors">
          <Link to={`/blogs/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        
        <CardDescription className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span>{post.date} • {post.readTime}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter>
        <Link 
          to={`/blogs/${post.slug}`} 
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
