import Link from "next/link"

interface RelatedTopic {
  name: string
  href: string
}

interface RelatedTopicsProps {
  topics: RelatedTopic[]
}

export default function RelatedTopics({ topics }: RelatedTopicsProps) {
  return (
    <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">関連トピック</h3>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index}>
            <Link href={topic.href} className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200">
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

