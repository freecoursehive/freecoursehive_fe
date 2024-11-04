/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ITEMS_PER_PAGE = 9;

const allCourses = [
  {
    id: 1,
    title: "Introduction to Python",
    provider: "CodeAcademy",
    category: "Programming",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    provider: "Udemy",
    category: "Web Development",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    provider: "Coursera",
    category: "Data Science",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    provider: "freeCodeCamp",
    category: "Programming",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Digital Marketing Essentials",
    provider: "Google Digital Garage",
    category: "Marketing",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Graphic Design Principles",
    provider: "Canva",
    category: "Design",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    provider: "edX",
    category: "Computer Science",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Financial Planning and Analysis",
    provider: "Coursera",
    category: "Finance",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    title: "Creative Writing Workshop",
    provider: "FutureLearn",
    category: "Arts",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    title: "Data Structures and Algorithms",
    provider: "MIT OpenCourseWare",
    category: "Computer Science",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    title: "Introduction to Psychology",
    provider: "Yale University",
    category: "Psychology",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    title: "Business Strategy Fundamentals",
    provider: "Harvard Business School Online",
    category: "Business",
    image:
      "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm58ZW58MHx8MHx8fDA%3D",
  },
];

export function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [courses, setCourses] = useState(allCourses);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [paginatedCourses, setPaginatedCourses] = useState<any>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allCourse, setAllCourses] = useState<any>([]);
  const courseSectionRef = useRef<HTMLElement>(null);

  const categories = [
    "All Categories",
    ...new Set(allCourse.map((course: any) => course.category)),
  ];

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://flask-redis-app.onrender.com/api/courses"
        );
        const data = await response.json();
        console.log(data); // Log the response data to inspect its structure
        setAllCourses(data);
        setFilteredCourses(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       // Replace this with your actual API endpoint
  //       const response = await fetch("http://localhost:5000/api/courses");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch courses");
  //       }
  //       const data = await response.json();
  //       setCourses(data);
  //       console.log(data);

  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  useEffect(() => {
    const filtered = allCourse?.filter(
      (course: any) =>
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.provider.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "" ||
          selectedCategory === "All Categories" ||
          course.category === selectedCategory)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const paginated = filteredCourses.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    setPaginatedCourses(paginated);
  }, [filteredCourses, currentPage]);

  const pageCount = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsSheetOpen(false);
    scrollToSection();
  };

  const scrollToSection = () => {
    if (courseSectionRef.current) {
      const navbarHeight = 64; // Adjust this value based on your navbar height
      const elementPosition =
        courseSectionRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold hidden md:inline">
              FreeCourseHive
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category: any) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link href="#" className="text-sm hover:underline">
              About
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex md:hidden items-center space-x-2">
            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category: any) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="text-sm hover:underline"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-sm hover:underline"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">
              Discover Free Online Courses
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Expand your knowledge with our curated collection of free courses
              from top educational platforms.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              FreeCourseHive offers a comprehensive list of free courses in
              programming, design, marketing, data science, and more, sourced
              from top educational platforms like Coursera, edX, and Udemy.
            </p>
          </div>
        </section>

        <section className="py-12" ref={courseSectionRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
              <h2 className="text-2xl font-bold">
                {selectedCategory && selectedCategory !== "All Categories"
                  ? `Available Courses in ${selectedCategory}`
                  : "Available Courses"}
              </h2>
              <div className="flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64"
                />
                <Button type="submit">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
            {isLoading ? (
              <p className="text-center text-muted-foreground">
                Loading courses...
              </p>
            ) : paginatedCourses.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No courses found. Try adjusting your search or filter.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {paginatedCourses.map((course: any) => (
                    <Card
                      key={course.id}
                      className="flex flex-col h-full overflow-hidden p-0"
                    >
                      <div className="relative w-full pt-[56.25%]">
                        <Image
                          src={course.image}
                          alt={`Cover image for ${course.title}`}
                          height={200}
                          width={200}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <CardHeader className="p-0 pb-4">
                          <CardTitle className="text-lg">
                            {course.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow p-0">
                          <p className="text-sm font-semibold text-primary">
                            Provider: {course.provider}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Category: {course.category}
                          </p>
                        </CardContent>
                        <CardFooter className="p-0 pt-4">
                          <Button className="w-full" asChild>
                            <Link href={`/detail/${course.id}`}>
                              View Course
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
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

      <footer className="bg-muted mt-12 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About FreeCourseHive</h3>
            <p className="text-sm text-muted-foreground">
              FreeCourseHive is your gateway to free online education. We curate
              the best free courses from around the web to help you learn new
              skills and advance your career.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              {categories.slice(1, 6).map((category: any) => (
                <li key={category}>
                  <Link href="#" className="text-sm hover:underline">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FreeCourseHive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
