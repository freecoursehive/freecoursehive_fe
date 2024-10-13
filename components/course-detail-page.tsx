'use client'

import { ArrowLeft, Clock, BarChart, User, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
          <CardHeader>
            <CardTitle>Course Not Found</CardTitle>
            <CardDescription>The requested course could not be found.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/" passHref>
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg">
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

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">{course.title}</CardTitle>
            <CardDescription className="text-lg">{course.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                <span>Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-primary" />
                <span>Level: {course.level}</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Course Topics</h2>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic, index) => (
                  <Badge key={index} variant="secondary">{topic}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Course Content</h2>
              <ul className="space-y-2">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2" aria-hidden="true"></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg py-6">Start Course</Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-muted mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 FreeCourseHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}