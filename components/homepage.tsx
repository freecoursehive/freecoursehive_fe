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
import useDataStore from "@/store/dataContext";

// This would typically come from an API or database
// This would typically come from an API or database

const ITEMS_PER_PAGE = 12;

export function Homepage() {
  const [allCourses, setAllCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const setData = useDataStore((state) => state.setData);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        console.log(data); // Log the response data to inspect its structure
        setAllCourses(data);
        setFilteredCourses(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search term and selected category
  useEffect(() => {
    const filtered = allCourses.filter(
      (course: any) =>
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.provider.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "" ||
          selectedCategory === "all" ||
          course.category === selectedCategory)
    );
    setFilteredCourses(filtered);

    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const categories = [
    ...new Set(allCourses.map((course: any) => course.category)),
  ];

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
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category: string) => (
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
                        <Link href={`/detail/${course.id}`}>
                          <Button variant="outline" className="w-full">
                            View Course
                          </Button>
                        </Link>
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

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 FreeCourseHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
