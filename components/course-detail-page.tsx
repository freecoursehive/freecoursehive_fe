"use client";

import { ArrowLeft, Clock, BarChart, User, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";
import { allCourses } from "@/lib/data";

// Sample course data (in a real app, this would come from an API or database)
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "Jane Doe",
    duration: "4 weeks",
    level: "Beginner",
    description:
      "Learn the basics of React, including components, state, and props. Build your first React application and understand the core concepts of this popular library.",
    rating: 4.7,
    enrollments: 1234,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "John Smith",
    duration: "6 weeks",
    level: "Intermediate",
    description:
      "Dive deep into advanced JavaScript concepts such as closures, prototypes, and asynchronous programming. Enhance your skills and write more efficient and powerful code.",
    rating: 4.9,
    enrollments: 987,
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Emily Brown",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Explore how Python is used in data science. Learn about data manipulation, visualization, and basic machine learning techniques using popular libraries like Pandas and Scikit-learn.",
    rating: 4.8,
    enrollments: 2345,
  },
];

export function CourseDetailPageComponent() {
  const params = useParams();
  const id = typeof params.id === "string" ? parseInt(params.id, 10) : NaN;
  const course = allCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The requested course could not be found.
            </p>
            <Link href="/" passHref>
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">FreeCourseHub</span>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-2 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-foreground h-32"></div>
            <CardContent className="relative pt-16 pb-8 px-6 md:px-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-full p-4 shadow-lg">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-center mb-4">
                {course.title}
              </h1>
              <p className="text-center text-muted-foreground mb-6">
                {course?.detail}
              </p>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <Clock className="h-4 w-4 mr-1 inline" />
                  {course.duration}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <BarChart className="h-4 w-4 mr-1 inline" />
                  {course.level}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <Star className="h-4 w-4 mr-1 inline" />
                  {course.rating}
                </Badge>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <User className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">
                      Course Instructor
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="font-semibold text-2xl">
                    {/* {course.enrollments.toLocaleString()} */}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Students Enrolled
                  </p>
                </div>
              </div>
            </CardContent>
            <div className="bg-muted p-6 md:p-8">
              <Button className="w-full text-lg py-6">Enroll Now</Button>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-muted mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 FreeCourseHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
