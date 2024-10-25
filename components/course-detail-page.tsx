/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowLeft, Clock, BarChart, User, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { allCourses } from "@/lib/data";

import { useEffect, useState } from "react";

// Sample course data (in a real app, this would come from an API or database)

export function CourseDetailPageComponent() {
  const [loading, setLoading] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://freecoursehive-be.onrender.com/api/courses"
        );
        const data = await response.json();
        setAllCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const params = useParams();
  const id = (params.id, 10);
  const course: any = allCourses.find((c: any) => c.id === id);

  console.log(course);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <p className="text-muted-foreground mb-6">
              Please wait while we load the course details.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            {/* not found or loading */}
            <h1 className="text-2xl font-bold mb-4">
              Course Not Found Or Loading
            </h1>
            <p className="text-muted-foreground mb-6">
              If loading, you will be moved to the loading screen in a while or
              Course Not Found!
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
            <span className="text-2xl font-bold">FreeCourseHive</span>
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
              <Link href={course.link} target="_blank">
                <Button className="w-full text-lg py-6">Enroll Now</Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-muted mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 FreeCourseHive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
