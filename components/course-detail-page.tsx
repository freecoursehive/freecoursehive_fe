/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowLeft, Clock, BarChart, User, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function CourseDetailPageComponent() {
  const [loading, setLoading] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://free-course-hive.onrender.com/api/courses"
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
  const id = params.id;

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
    <div className="min-h-screen bg-background pt-16">
      <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground z-10 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">FreeCourseHub</span>
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

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-48 md:h-64">
              <Image
                src={course.image}
                alt={`Cover image for ${course.title}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute top-4 right-4 z-10">
                <Badge className="text-sm px-3 py-1 bg-primary text-primary-foreground font-semibold shadow-lg">
                  {course.provider}
                </Badge>
              </div>
            </div>
            <CardContent className="relative pt-6 pb-8 px-6 md:px-8">
              <h1 className="text-3xl font-bold text-center mb-4">
                {course.title}
              </h1>
              <p className="text-center text-muted-foreground mb-6">
                {course.detail}
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
              <div className="mb-8">
                <Button
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href={course.link}>Enroll Now</Link>
                </Button>
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
                  <p className="font-semibold text-2xl">{course.enrollments}</p>
                  <p className="text-sm text-muted-foreground">
                    Students Enrolled
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
