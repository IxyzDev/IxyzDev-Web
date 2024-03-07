import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6 text-black">
        <div className="mx-auto grid max-w-5xl items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Here are a few of my favorite projects. Click on the images to see a
            live demo.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
          <Card>
            <div className="grid gap-4">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Name Goes Here</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project goes here. It can span multiple
                    lines.
                  </p>
                </div>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </div>
          </Card>
          <Card>
            <div className="grid gap-4">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Name Goes Here</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project goes here. It can span multiple
                    lines.
                  </p>
                </div>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </div>
          </Card>
          <Card>
            <div className="grid gap-4">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Name Goes Here</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project goes here. It can span multiple
                    lines.
                  </p>
                </div>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </div>
          </Card>
          <Card>
            <div className="grid gap-4">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Name Goes Here</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the project goes here. It can span multiple
                    lines.
                  </p>
                </div>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
