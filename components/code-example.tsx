"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"

interface CodeExampleProps {
  code: string
  language: string
  title?: string
  description?: string
  collapsible?: boolean
  defaultExpanded?: boolean
}

export default function CodeExample({
  code,
  language,
  title,
  description,
  collapsible = false,
  defaultExpanded = true,
}: CodeExampleProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(defaultExpanded)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // 簡易的なシンタックスハイライト（実際の実装ではPrismJSなどを使用するとよい）
  const highlightedCode = code
    .replace(/(\/\/.*)/g, '<span class="text-[#4A5568]">$1</span>')
    .replace(
      /\b(func|package|import|var|const|type|struct|interface|map|chan|go|defer|if|else|for|range|return|break|continue|switch|case|default)\b/g,
      '<span class="text-[#00ACD7]">$1</span>',
    )
    .replace(/\b(string|int|bool|float|byte|rune|error|true|false|nil)\b/g, '<span class="text-[#5A189A]">$1</span>')
    .replace(/\b(fmt|make|len|cap|append|copy|delete|close|panic|recover)\b/g, '<span class="text-[#00ACD7]">$1</span>')
    .replace(/("[^"]*")/g, '<span class="text-[#4A5568]">$1</span>')

  return (
    <div className="relative">
      {title && (
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-[#1A1A2E]">{title}</h3>
          {collapsible && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
            >
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>
      )}

      {description && <p className="text-[#4A5568] mb-3">{description}</p>}

      {(!collapsible || expanded) && (
        <>
          <div className="absolute right-2 top-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-md bg-white text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200 shadow-sm"
              aria-label="コードをコピー"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <pre className="bg-[#F0F4F8] border border-[#5A189A]/20 rounded-lg p-4 overflow-x-auto text-[#1A1A2E] font-mono text-sm shadow-sm">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </>
      )}
    </div>
  )
}

