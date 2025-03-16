interface PageHeaderProps {
  title: string
  description: string
  category: string
}

export default function PageHeader({ title, description, category }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="inline-block px-3 py-1 bg-[#5A189A]/10 border border-[#5A189A]/20 rounded text-[#4A5568] text-sm mb-2">
        {category}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#00ACD7] mb-4">{title}</h1>
      <p className="text-[#1A1A2E] text-lg max-w-3xl">{description}</p>
    </div>
  )
}

