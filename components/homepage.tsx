"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// This would typically come from an API or database
const allCourses = [
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
  {
    id: 10,
    title: "Data Structures and Algorithms",
    provider: "MIT OpenCourseWare",
    category: "Computer Science",
  },
  {
    id: 11,
    title: "Introduction to Psychology",
    provider: "Yale University",
    category: "Psychology",
  },
  {
    id: 12,
    title: "Business Strategy Fundamentals",
    provider: "Harvard Business School Online",
    category: "Business",
  },
];

const ITEMS_PER_PAGE = 6;

export function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filtered = allCourses.filter(
      (course) =>
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.provider.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "" || course.category === selectedCategory)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const categories = [...new Set(allCourses.map((course) => course.category))];

  const pageCount = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  // paginate the filtered courses by slicing the array
  // the start index is (currentPage - 1) * ITEMS_PER_PAGE
  // the end index is currentPage * ITEMS_PER_PAGE
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hello">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
            {paginatedCourses.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No courses found. Try adjusting your search or filter.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedCourses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Provider: {course.provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Category: {course.category}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Course
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center items-center space-x-2">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {pageCount}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                    }
                    disabled={currentPage === pageCount}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </>
            )}
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
