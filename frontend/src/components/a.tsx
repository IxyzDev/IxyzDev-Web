/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hIi6KDlzeRa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="grid gap-6 sm:gap-12 px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Hi, I'm John Doe
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I'm a passionate developer who loves creating amazing web
            experiences. Welcome to my corner of the internet.
          </p>
        </div>
        <div className="flex items-center justify-center space-y-4 sm:flex-col sm:gap-4">
          <div className="flex items-center space-x-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: '100/100',
                objectFit: 'cover',
              }}
              width="100"
            />
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer. Open Source Enthusiast.
              </p>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Link
              className="inline-flex h-7 items-center rounded-full border border-gray-200 border-gray-200 px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Follow
            </Link>
            <Link
              className="inline-flex h-7 items-center rounded-full bg-gray-900 px-3 text-xs font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Message
            </Link>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              About Me
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <p className="leading-7">
                I'm a web developer with a passion for creating beautiful and
                functional websites. I love to experiment with new technologies
                and I'm always looking for ways to improve my skills.
              </p>
              <p className="leading-7">
                In my free time, I enjoy contributing to open source projects
                and writing about web development on my blog. I'm also an avid
                hiker and nature photographer.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Contact Info
            </h2>
            <dl className="grid gap-1 text-gray-500 md:grid-cols-2 dark:text-gray-400">
              <div className="grid gap-0.5">
                <dt className="text-sm">Email</dt>
                <dd className="font-medium">john@example.com</dd>
              </div>
              <div className="grid gap-0.5">
                <dt className="text-sm">Location</dt>
                <dd className="font-medium">New York, NY</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              My Projects
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 dark:bg-gray-800">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="67"
                  src="/placeholder.svg"
                  width="120"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Project One</h3>
                  <p className="text-sm">
                    This is a description of my first project. It is a very cool
                    project.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 dark:bg-gray-800">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="67"
                  src="/placeholder.svg"
                  width="120"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Project Two</h3>
                  <p className="text-sm">
                    This is a description of my second project. It is a very
                    cool project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              My Skills
            </h2>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">HTML</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">CSS</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">React</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">Next.js</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Contact Me
            </h2>
            <form className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm" htmlFor="name">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-start-2 md:row-start-1">
                <Label className="text-sm" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Testimonials
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p>
                  "John is an amazing developer. He delivered our project on
                  time and exceeded our expectations. We will definitely be
                  working with him again in the future."
                </p>
                <div className="flex items-center space-x-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: '40/40',
                      objectFit: 'cover',
                    }}
                    width="40"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold">Alice Johnson</h3>
                    <p className="text-xs">CEO, Acme Inc</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  "John is an amazing developer. He delivered our project on
                  time and exceeded our expectations. We will definitely be
                  working with him again in the future."
                </p>
                <div className="flex items-center space-x-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: '40/40',
                      objectFit: 'cover',
                    }}
                    width="40"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold">Alice Johnson</h3>
                    <p className="text-xs">CEO, Acme Inc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
