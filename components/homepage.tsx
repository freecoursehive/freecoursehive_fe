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
// This would typically come from an API or database
const allCourses = [
  {
    id: 1,
    title: "Business Analysis & Process Management",
    provider: "Coursera Project Network",
    category: "study",
    detail:
      "Skills you'll gain: Business Analysis, Business Process Management",
    rating: "4.4",
  },
  {
    id: 2,
    title: "Build a free website with WordPress",
    provider: "Coursera Project Network",
    category: "study",
    detail: "Skills you'll gain: Creativity, Web Design, Web Development",
    rating: "4.4",
  },
  {
    id: 3,
    title: "Introduction to Microsoft Excel",
    provider: "Coursera Project Network",
    category: "study",
    detail:
      "Skills you'll gain: Data Analysis, Microsoft Excel, Data Management, Leadership and Management",
    rating: "4.6",
  },
  {
    id: 4,
    title: "English for Common Interactions in the Workplace: Basic Level",
    provider: "Pontificia Universidad Cat\u00c3\u00b3lica de Chile",
    category: "study",
    detail: "N/A",
    rating: "4.7",
  },
  {
    id: 5,
    title: "First Step Korean",
    provider: "Yonsei University",
    category: "study",
    detail: "Skills you'll gain: Culture, Writing",
    rating: "4.9",
  },
  {
    id: 6,
    title: "Investment Risk Management",
    provider: "Coursera Project Network",
    category: "study",
    detail: "Skills you'll gain: Leadership and Management, Risk Management",
    rating: "4.3",
  },
  {
    id: 7,
    title: "Creative Thinking: Techniques and Tools for Success",
    provider: "Imperial College London",
    category: "study",
    detail: "Skills you'll gain: Creativity, Problem Solving, Collaboration",
    rating: "4.7",
  },
  {
    id: 8,
    title: "English for Career Development",
    provider: "University of Pennsylvania",
    category: "study",
    detail:
      "Skills you'll gain: Business Communication, Human Resources, Human Resources Operations, Application Development, People Analysis",
    rating: "4.8",
  },
  {
    id: 9,
    title: "Python for Data Science, AI & Development",
    provider: "IBM",
    category: "study",
    detail:
      "Skills you'll gain: Computer Programming, Data Analysis, Python Programming",
    rating: "4.6",
  },
  {
    id: 10,
    title: "Cybersecurity for Everyone",
    provider: "University of Maryland, College Park",
    category: "study",
    detail:
      "Skills you'll gain: Cyberattacks, Human Computer Interaction, Network Security, Security Engineering, Security Strategy, Computer Security Models, Leadership and Management, Risk Management, Software Security, Correlation And Dependence",
    rating: "4.7",
  },
  {
    id: 11,
    title: "Food & Beverage Management",
    provider: "Universit\u00c3\u00a0 Bocconi",
    category: "study",
    detail:
      "Skills you'll gain: Design and Product, Marketing, Business Analysis, Customer Analysis, Product Marketing, Product Strategy, Communication, Entrepreneurship, Leadership and Management, Marketing Management, Strategy",
    rating: "4.8",
  },
  {
    id: 12,
    title: "Financial Markets",
    provider: "Yale University",
    category: "study",
    detail:
      "Skills you'll gain: Finance, Risk Management, Banking, Behavioral Economics, Critical Thinking, Decision Making, Financial Analysis, Innovation, Regulations and Compliance",
    rating: "4.8",
  },
  {
    id: 13,
    title: "Humanities",
    provider: "PredictionX: Lost Without Longitude",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 14,
    title: "Humanities",
    provider: "PredictionX: Omens, Oracles & Prophecies",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 15,
    title: "Social Sciences",
    provider: "Systematic Approaches to Policy Design",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 16,
    title: "Social Sciences",
    provider: "New Ideas for Nonprofit Leaders Webinar",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 17,
    title: "Social Sciences",
    provider: "4P Model for Strategic Leadership Podcasts",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 18,
    title: "Social Sciences",
    provider: "The Science of Corresponding with Busy People Webinar",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 19,
    title: "Computer Science",
    provider: "CS50's Introduction to Programming with Scratch",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 20,
    title: "Social Sciences",
    provider: "Global News & Technology Leadership in Challenging Times",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 21,
    title: "Social Sciences",
    provider:
      "Our Information Emergency: Navigating the Media Environment in 2021",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 22,
    title: "Computer Science",
    provider: "CS50's Introduction to Artificial Intelligence with Python",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 23,
    title: "Computer Science",
    provider: "CS50 for Lawyers",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 24,
    title: "Business",
    provider: "Negotiating Salary",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 25,
    title: "Business",
    provider: "Resilient Leadership",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 26,
    title: "Health & Medicine",
    provider: "Clinical Care for Autistic Adults",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
  {
    id: 27,
    title: "Social Sciences",
    provider:
      "A Darkening Horizon: Nuclear Dangers Around the World with Matthew Bunn",
    category: "study",
    detail: "N/A",
    rating: "N/A",
  },
];

const ITEMS_PER_PAGE = 12;

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
