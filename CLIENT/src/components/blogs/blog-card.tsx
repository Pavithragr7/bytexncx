import Link from "next/link"



















import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  date: string
  authorImage?: string
}

interface BlogCardProps {
  blog: BlogPost
}

export function BlogCard({ blog }: BlogCardProps) {
  const contentPreview = blog.content.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Link href={`/blogs/${blog.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:scale-[1.02] duration-200">
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
            {blog.title}
          </h3>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{contentPreview}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={blog.authorImage || "/default-avatar.png"} alt={blog.author} />
              <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{blog.author}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
