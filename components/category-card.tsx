import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryItem {
  name: string;
  href: string;
}

interface CategoryCardProps {
  title: string;
  items: CategoryItem[];
}

export default function CategoryCard({ title, items }: CategoryCardProps) {
  return (
    <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 shadow-sm">
      <h2 className="text-xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center justify-between text-[#4A5568] hover:text-[#00ACD7] group transition-colors duration-200"
            >
              <span>{item.name}</span>
              <ChevronRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
