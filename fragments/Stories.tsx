import stories from '@/app/data/stories'
import StoryItem from '@/components/StoryItem'
import Link from 'next/link'

export default function Stories() {
  return (
    <div className="">
      <div className="mb-9 flex items-center">
        <h3 className="text-slate-900 text-2xl leading-normal font-semibold">
          Top Stories
        </h3>
        <Link
          className="ml-auto text-violet-500 hover:text-violet-700 text-xl font-semibold"
          href=""
        >
          See all
        </Link>
      </div>

      <div className="mb-10 max-w-full flex gap-8 overflow-x-auto">
        {stories.map((story) => (
          <StoryItem key={story.id} {...story} />
        ))}
      </div>
    </div>
  )
}
