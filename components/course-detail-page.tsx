'use client'

import { ArrowLeft, Clock, BarChart, User, BookOpen, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Sample course data (in a real app, this would come from an API or database)
const courses = [
  { id: 1, title: "Introduction to React", instructor: "Jane Doe", duration: "4 weeks", level: "Beginner", description: "Learn the basics of React, including components, state, and props. Build your first React application and understand the core concepts of this popular library.", topics: ["JSX", "Components", "State", "Props", "Hooks"] },
  { id: 2, title: "Advanced JavaScript Concepts", instructor: "John Smith", duration: "6 weeks", level: "Intermediate", description: "Dive deep into advanced JavaScript concepts such as closures, prototypes, and asynchronous programming. Enhance your skills and write more efficient and powerful code.", topics: ["Closures", "Prototypes", "Async/Await", "ES6+", "Design Patterns"] },
  { id: 3, title: "Python for Data Science", instructor: "Emily Brown", duration: "8 weeks", level: "Intermediate", description: "Explore how Python is used in data science. Learn about data manipulation, visualization, and basic machine learning techniques using popular libraries like Pandas and Scikit-learn.", topics: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebooks"] },
]

export function CourseDetailPageComponent() {
  const params = useParams()
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : NaN
  const course = courses.find(c => c.id === id)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested course could not be found.</p>
            <Link href="/" passHref>
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">FreeCourseHub</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-sm font-medium hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-primary" />
                  <span>{course.level}</span>
                </div>
              </div>
              <Separator className="my-8" />
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator className="my-8" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
                <div className="space-y-4">
                  {course.topics.map((topic, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <span className="font-medium">Module {index + 1}: {topic}</span>
                        <Badge variant="secondary">Preview</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-muted p-6 md:p-8">
              <Button className="w-full text-lg py-6">Enroll in Course</Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 FreeCourseHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}