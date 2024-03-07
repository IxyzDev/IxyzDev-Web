import Hero from '@/components/home/Hero';
import Proyects from '@/components/Proyects';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 ">
      <Hero />
      {/* <Proyects /> */}
    </div>
  );
}

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/On4v8wGAvu9
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { CardContent, Card } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Acme Inc</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Projects
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             About
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col min-[400px]:flex-row items-center gap-6 md:gap-10 lg:gap-16">
//               <div className="space-y-4">
//                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                   Hi, I'm Jane Smith
//                 </h1>
//                 <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   I'm a frontend engineer with a passion for creating beautiful
//                   and accessible web experiences. Welcome to my corner of the
//                   internet.
//                 </p>
//               </div>
//               <div className="mx-auto order-first min-[400px]:order-last">
//                 <img
//                   alt="Image"
//                   className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
//                   height="400"
//                   src="/placeholder.svg"
//                   width="600"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container px-4 md:px-6">
//             <div className="mx-auto grid max-w-5xl items-start gap-4">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Featured Projects
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Here are a few of my favorite projects. Click on the images to
//                 see a live demo.
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
//               <Card>
//                 <div className="grid gap-4">
//                   <img
//                     alt="Image"
//                     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
//                     height="310"
//                     src="/placeholder.svg"
//                     width="550"
//                   />
//                   <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-bold">
//                         Project Name Goes Here
//                       </h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         Description of the project goes here. It can span
//                         multiple lines.
//                       </p>
//                     </div>
//                     <Button variant="outline">View Project</Button>
//                   </CardContent>
//                 </div>
//               </Card>
//               <Card>
//                 <div className="grid gap-4">
//                   <img
//                     alt="Image"
//                     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
//                     height="310"
//                     src="/placeholder.svg"
//                     width="550"
//                   />
//                   <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-bold">
//                         Project Name Goes Here
//                       </h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         Description of the project goes here. It can span
//                         multiple lines.
//                       </p>
//                     </div>
//                     <Button variant="outline">View Project</Button>
//                   </CardContent>
//                 </div>
//               </Card>
//               <Card>
//                 <div className="grid gap-4">
//                   <img
//                     alt="Image"
//                     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
//                     height="310"
//                     src="/placeholder.svg"
//                     width="550"
//                   />
//                   <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-bold">
//                         Project Name Goes Here
//                       </h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         Description of the project goes here. It can span
//                         multiple lines.
//                       </p>
//                     </div>
//                     <Button variant="outline">View Project</Button>
//                   </CardContent>
//                 </div>
//               </Card>
//               <Card>
//                 <div className="grid gap-4">
//                   <img
//                     alt="Image"
//                     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
//                     height="310"
//                     src="/placeholder.svg"
//                     width="550"
//                   />
//                   <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-bold">
//                         Project Name Goes Here
//                       </h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         Description of the project goes here. It can span
//                         multiple lines.
//                       </p>
//                     </div>
//                     <Button variant="outline">View Project</Button>
//                   </CardContent>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container px-4 md:px-6">
//             <div className="mx-auto grid max-w-5xl items-start gap-4">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Skills
//               </h2>
//               <div className="grid gap-4 md:gap-8 lg:gap-12">
//                 <div className="flex items-center gap-4">
//                   <CheckCircleIcon className="h-6 w-6" />
//                   <div className="grid gap-1">
//                     <h3 className="text-xl font-bold">Web Development</h3>
//                     <p className="text-gray-500 dark:text-gray-400">
//                       Building beautiful and performant web experiences.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <CheckCircleIcon className="h-6 w-6" />
//                   <div className="grid gap-1">
//                     <h3 className="text-xl font-bold">Accessibility</h3>
//                     <p className="text-gray-500 dark:text-gray-400">
//                       Ensuring my sites are usable by everyone.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <CheckCircleIcon className="h-6 w-6" />
//                   <div className="grid gap-1">
//                     <h3 className="text-xl font-bold">Performance</h3>
//                     <p className="text-gray-500 dark:text-gray-400">
//                       Making the web fast and snappy.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <CheckCircleIcon className="h-6 w-6" />
//                   <div className="grid gap-1">
//                     <h3 className="text-xl font-bold">Developer Experience</h3>
//                     <p className="text-gray-500 dark:text-gray-400">
//                       Creating tools to make developers' lives easier.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container px-4 md:px-6">
//             <div className="mx-auto grid max-w-5xl items-start gap-4">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Contact Me
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Want to work together? Send me a message.
//               </p>
//             </div>
//             <div className="mx-auto w-full max-w-lg space-y-4">
//               <form className="grid gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" required />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" required type="email" />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea id="message" required />
//                 </div>
//                 <Button type="submit">Send Message</Button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">
//           © 2024 Acme Inc. All rights reserved.
//         </p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   );
// }

// function CheckCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//       <polyline points="22 4 12 14.01 9 11.01" />
//     </svg>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }
