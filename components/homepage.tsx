"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Search } from "lucide-react";
import Link from "next/link";

export function Homepage() {
  // This would typically come from a database or API
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Python",
      provider: "CodeAcademy",
      category: "Programming",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      provider: "Udemy",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      provider: "Coursera",
      category: "Data Science",
    },
  ];

  const allCourses = [
    {
      id: 4,
      title: "JavaScript Fundamentals",
      provider: "freeCodeCamp",
      category: "Programming",
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      provider: "Google Digital Garage",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Graphic Design Principles",
      provider: "Canva",
      category: "Design",
    },
    {
      id: 7,
      title: "Introduction to Artificial Intelligence",
      provider: "edX",
      category: "Computer Science",
    },
    {
      id: 8,
      title: "Financial Planning and Analysis",
      provider: "Coursera",
      category: "Finance",
    },
    {
      id: 9,
      title: "Creative Writing Workshop",
      provider: "FutureLearn",
      category: "Arts",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">FreeCourseHub</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Discover Free Online Courses
            </h1>
            <p className="text-xl mb-8">
              Expand your knowledge with our curated collection of free courses
              from around the web.
            </p>
            <div className="max-w-md mx-auto flex">
              <Input
                type="search"
                placeholder="Search courses..."
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.provider}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">All Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Category: {course.category}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/detail/${1}`}>
                      <Button variant="outline" className="w-full">
                        View Course
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FreeCourseHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
