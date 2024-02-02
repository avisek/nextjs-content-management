import stories from '@/app/data/stories'
import cn from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  id: string
}

export default function StoryViewer({ id }: Props) {
  const story = stories.find((story) => story.id === id)

  if (!story) {
    return notFound()
  }

  return (
    <div className="p-2 bg-zinc-500 rounded-[28px]">
      <div className="mx-auto max-w-[561px]">
        <div className="relative w-full h-full rounded-[20px]">
          <Image
            className="w-full h-full aspect-[561/812] object-cover rounded-[inherit]"
            src={story.imageSrc}
            alt={story.title}
            width={4 * 561}
            height={4 * 812}
            priority={true}
          />

          <div className="p-4 absolute w-full h-full flex flex-col justify-between inset-0 bg-gradient-to-t from-black/70 from-30% to-black/0 rounded-[inherit]">
            <svg
              className="mx-auto"
              width="200"
              height="5"
              viewBox="0 0 200 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="5" rx="2.5" fill="white" />
              <rect
                opacity="0.5"
                x="70"
                width="60"
                height="5"
                rx="2.5"
                fill="white"
              />
              <rect
                opacity="0.5"
                x="140"
                width="60"
                height="5"
                rx="2.5"
                fill="white"
              />
            </svg>

            <div className="">
              <h4 className="mb-4 text-white text-[40px] leading-normal font-bold">
                {story.title}
              </h4>

              <div className="flex items-center">
                <div className="px-[20px] py-[15px] min-w-[170px] text-center text-xl font-semibold bg-violet-100 text-violet-500 rounded-[5px]">
                  {story.field}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
