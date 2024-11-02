// app/api/sitemap/route.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

// const API_URL = "https://freecoursehive-be.onrender.com/api/courses";

export async function GET() {
  const baseUrl = "https://www.freecoursehive.com";

  // Static paths with priority settings
  const staticPaths = [
    { url: "/", priority: 1.0 }, // Index page with priority 1.0
    { url: "/about", priority: 0.7 },
    { url: "/contact", priority: 0.7 },
    { url: "/courses", priority: 0.7 },
    // Add other static paths here
  ];

  // Fetch dynamic paths from the Flask API
  // let dynamicPaths = [];
  // try {
  //   const response = await fetch(API_URL);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch courses");
  //   }
  //   const courses = await response.json();
  //   dynamicPaths = courses.map((course) => ({
  //     url: `/detail/${course.id}`,
  //     priority: 0.7,
  //   }));
  // } catch (error) {
  //   console.error("Error fetching dynamic paths:", error);
  // }

  // Combine static and dynamic paths
  const paths = [...staticPaths];

  // Create a sitemap stream
  const stream = new SitemapStream({ hostname: baseUrl });
  paths.forEach(({ url, priority }) => {
    stream.write({ url, changefreq: "daily", priority });
  });
  stream.end();

  // Generate XML from the stream
  const sitemap = await streamToPromise(Readable.from(stream));

  return new Response(sitemap.toString(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
