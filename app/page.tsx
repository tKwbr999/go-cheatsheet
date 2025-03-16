import { Search } from "lucide-react";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import CodeBlock from "@/components/code-block";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#00ACD7] mb-6 tracking-tight">
            Go言語チートシート
          </h1>

          {/* 一旦検索は除外 */}
          {/* <div className="mt-8 relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="検索..."
                className="w-full py-3 px-4 pl-12 bg-white border border-[#00ACD7]/30 rounded-lg text-[#1A1A2E] placeholder-[#4A5568]/70 focus:outline-none focus:ring-2 focus:ring-[#00ACD7]/50 focus:border-transparent shadow-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00ACD7]">
                <Search size={20} />
              </div>
            </div>
          </div> */}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <CategoryCard
            title="基本構文"
            items={[
              { name: "変数宣言", href: "/basic/variables" },
              { name: "定数", href: "/basic/constants" },
              { name: "データ型", href: "/basic/types" },
              { name: "演算子", href: "/basic/operators" },
              { name: "制御構文", href: "/basic/control-flow" },
              { name: "関数", href: "/basic/functions" },
            ]}
          />

          <CategoryCard
            title="データ構造"
            items={[
              { name: "配列", href: "/data-structures/arrays" },
              { name: "スライス", href: "/data-structures/slices" },
              { name: "マップ", href: "/data-structures/maps" },
              { name: "構造体", href: "/data-structures/structs" },
              { name: "インターフェース", href: "/data-structures/interfaces" },
              { name: "ポインタ", href: "/data-structures/pointers" },
            ]}
          />

          <CategoryCard
            title="並行処理"
            items={[
              { name: "ゴルーチン", href: "/concurrency/goroutines" },
              { name: "チャネル", href: "/concurrency/channels" },
              { name: "select文", href: "/concurrency/select" },
              { name: "sync パッケージ", href: "/concurrency/sync-package" },
              { name: "コンテキスト", href: "/concurrency/context" },
              { name: "並行パターン", href: "/concurrency/patterns" },
            ]}
          />

          <CategoryCard
            title="標準ライブラリ"
            items={[
              { name: "fmt", href: "/stdlib/fmt" },
              { name: "io", href: "/stdlib/io" },
              { name: "net/http", href: "/stdlib/net-http" },
              { name: "encoding/json", href: "/stdlib/encoding-json" },
              { name: "time", href: "/stdlib/time" },
              { name: "os", href: "/stdlib/os" },
            ]}
          />
        </div>

        {/* 一旦サンプルは除外 */}
        {/* <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 mb-16 shadow-sm">
          <h2 className="text-2xl font-bold text-[#00ACD7] mb-6 border-b border-[#5A189A]/20 pb-2 flex items-center">
            <span className="inline-block w-3 h-3 bg-[#00ACD7] rounded-full mr-2 animate-pulse"></span>
            サンプルコード: スライス
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#5A189A] mb-4">スライスの基本操作</h3>
              <CodeBlock
                code={`// スライスの宣言と初期化
numbers := []int{1, 2, 3, 4, 5}

// 要素の追加
numbers = append(numbers, 6)

// スライスの長さと容量
fmt.Println(len(numbers)) // 6
fmt.Println(cap(numbers)) // 少なくとも6

// スライスのスライス
subset := numbers[1:4] // [2, 3, 4]

// スライスのコピー
dest := make([]int, len(numbers))
copy(dest, numbers)`}
                language="go"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#5A189A] mb-4">スライスの応用テクニック</h3>
              <CodeBlock
                code={`// 2次元スライス
matrix := [][]int{
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9},
}

// スライスの拡張
func extendSlice(s []int, capacity int) []int {
    if capacity <= cap(s) {
        return s
    }
    
    // 新しいスライスを作成
    newSlice := make([]int, len(s), capacity)
    copy(newSlice, s)
    return newSlice
}

// スライスの削除
func removeAt(s []int, i int) []int {
    return append(s[:i], s[i+1:]...)
}`}
                language="go"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#5A189A] mb-4">実行結果</h3>
            <div className="bg-[#F0F4F8] border border-[#5A189A]/20 rounded p-4 text-[#1A1A2E] font-mono">
              <p>スライスの長さ: 6</p>
              <p>スライスの容量: 8</p>
              <p>サブセット: [2 3 4]</p>
              <p>コピー後: [1 2 3 4 5 6]</p>
            </div>
          </div>
        </section> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 hover:border-[#00ACD7]/30 transition-all duration-300 shadow-sm">
            <h3 className="text-xl font-bold text-[#00ACD7] mb-3">
              エラー処理
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/errors/basics"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  基本的なエラー処理
                </Link>
              </li>
              <li>
                <Link
                  href="/errors/custom"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  カスタムエラー
                </Link>
              </li>
              <li>
                <Link
                  href="/errors/panic-recover"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  パニックとリカバー
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 hover:border-[#00ACD7]/30 transition-all duration-300 shadow-sm">
            <h3 className="text-xl font-bold text-[#00ACD7] mb-3">テスト</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/testing/unit"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  ユニットテスト
                </Link>
              </li>
              <li>
                <Link
                  href="/testing/benchmarks"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  ベンチマーク
                </Link>
              </li>
              <li>
                <Link
                  href="/testing/examples"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  テスト例
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 hover:border-[#00ACD7]/30 transition-all duration-300 shadow-sm">
            <h3 className="text-xl font-bold text-[#00ACD7] mb-3">ツール</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/go-mod"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  Go Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/go-fmt"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  gofmt
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/go-vet"
                  className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
                >
                  go vet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#5A189A]/20 py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-[#4A5568]">
          <p>
            © {new Date().getFullYear()} Go言語チートシート | デザイン:
            サイバーパンクネオンテック
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="/about"
              className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>

      {/* サイバーパンク装飾要素 - ライトモード用に調整 */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-light.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#00ACD7]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-[#5A189A]/5 blur-3xl"></div>
      </div>
    </div>
  );
}
