import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt:
        "Learn how to create robust, type-safe APIs that can handle high traffic loads while maintaining code quality and developer experience. We'll dive deep into architecture patterns, error handling, and performance optimization.",
      date: "Jan 14, 2024",
      readTime: "8 min read",
      tags: ["Node.js", "TypeScript", "API Design"],
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      category: "Backend Development",
    },
    {
      title: "AWS Lambda Best Practices for Production",
      excerpt:
        "Discover essential patterns and practices for deploying serverless functions at scale, including error handling, monitoring, and cost optimization strategies that actually work in the real world.",
      date: "Jan 7, 2024",
      readTime: "12 min read",
      tags: ["AWS", "Serverless", "Lambda"],
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "Cloud Architecture",
    },
    {
      title: "React Performance Optimization Techniques",
      excerpt:
        "Explore advanced techniques to optimize React applications, from code splitting to memoization and virtual scrolling. Real-world examples included.",
      date: "Dec 21, 2023",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "Frontend Development",
    },
  ]

  return (
    <section id="blog" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// INSIGHTS</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Latest <span className="gradient-text">Thoughts</span>
          </h2>
          <p className="text-xl text-muted-foreground">Sharing knowledge, one post at a time</p>
        </div>

        {/* Magazine-style layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured post - takes up more space */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <Card
                key={index}
                className="lg:col-span-2 creative-card border-0 bg-gradient-to-br from-background to-muted/10 overflow-hidden group"
              >
                <div className="relative">
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Featured badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0 font-medium">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>

                    {/* Category */}
                    <div className="absolute top-6 right-6">
                      <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold leading-tight group-hover:text-yellow-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn p-0 h-auto text-base font-medium hover:bg-transparent">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}

          {/* Regular posts - stacked vertically */}
          <div className="space-y-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Card
                  key={index}
                  className="creative-card border-0 bg-gradient-to-br from-background to-muted/10 overflow-hidden group"
                >
                  <div className="flex">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex-shrink-0 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <CardContent className="p-6 flex-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="section-number">0{index + 2}</span>
                        </div>

                        <h3 className="text-lg font-bold leading-tight group-hover:gradient-text transition-all duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto text-xs hover:bg-transparent group/btn"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* View all posts button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
