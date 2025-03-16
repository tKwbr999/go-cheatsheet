import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import CodeExample from "@/components/code-example";
import RelatedTopics from "@/components/related-topics";

export default function VariablesPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200"
          >
            <ArrowLeft size={16} className="mr-2" />
            ホームに戻る
          </Link>
        </div>

        <PageHeader
          title="変数宣言"
          description="Go言語における変数の宣言と初期化の方法について学びます。"
          category="基本構文"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                基本的な変数宣言
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                Go言語では、
                <code className="text-[#00ACD7] bg-[#F0F4F8] px-1 rounded">
                  var
                </code>{" "}
                キーワードを使用して変数を宣言します。
                変数名の後に型を指定し、必要に応じて初期値を設定できます。
              </p>

              <CodeExample
                code={`// 基本的な変数宣言
var name string
var age int
var isActive bool

// 初期値を設定した変数宣言
var name string = "Gopher"
var age int = 25
var isActive bool = true

// 型推論を使用した変数宣言
var name = "Gopher"  // string型と推論される
var age = 25         // int型と推論される
var isActive = true  // bool型と推論される`}
                language="go"
                title="基本的な変数宣言"
              />
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                短縮変数宣言
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                関数内では、
                <code className="text-[#00ACD7] bg-[#F0F4F8] px-1 rounded">
                  :=
                </code>{" "}
                演算子を使用して変数を宣言と初期化を同時に行うことができます。
                この方法では型を明示的に指定する必要はなく、初期値から型が推論されます。
              </p>

              <CodeExample
                code={`func main() {
    // 短縮変数宣言
    name := "Gopher"
    age := 25
    isActive := true
    
    // 複数の変数を一度に宣言
    x, y := 10, 20
    
    // 既存の変数と新しい変数を組み合わせて宣言
    // 少なくとも1つの新しい変数があれば有効
    x, z := 30, 40  // xは再代入、zは新しい変数
}`}
                language="go"
                title="短縮変数宣言"
              />

              <div className="mt-4 bg-[#F0F4F8] border border-[#5A189A]/20 rounded p-4 text-[#1A1A2E]">
                <p className="text-[#00ACD7] font-semibold">注意点</p>
                <ul className="list-disc list-inside text-[#4A5568] mt-2 space-y-1">
                  <li>短縮変数宣言は関数内でのみ使用できます</li>
                  <li>
                    パッケージレベルでは{" "}
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      var
                    </code>{" "}
                    を使用する必要があります
                  </li>
                  <li>
                    既に宣言されている変数に対して{" "}
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      :=
                    </code>{" "}
                    を使用すると再代入になります
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                複数変数の宣言
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                Go言語では、複数の変数を一度に宣言することができます。これにより、コードをより簡潔に書くことができます。
              </p>

              <CodeExample
                code={`// 同じ型の複数変数を宣言
var x, y, z int

// 初期値を設定した複数変数の宣言
var x, y, z int = 10, 20, 30

// 型推論を使用した複数変数の宣言
var x, y, z = 10, "hello", true

// 変数ブロックを使用した宣言
var (
    name     string = "Gopher"
    age      int    = 25
    isActive bool   = true
    score    float64
)`}
                language="go"
                title="複数変数の宣言"
              />
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                変数のゼロ値
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                Go言語では、初期値を指定せずに変数を宣言すると、その型に応じたゼロ値が自動的に設定されます。
              </p>

              <CodeExample
                code={`var name string     // ""（空文字列）
var age int         // 0
var isActive bool   // false
var score float64   // 0.0

// ポインタ、インターフェース、スライス、マップ、チャネル、関数のゼロ値はnil
var ptr *int        // nil
var s []int         // nil
var m map[string]int // nil`}
                language="go"
                title="変数のゼロ値"
              />

              <div className="mt-4 bg-[#F0F4F8] border border-[#5A189A]/20 rounded p-4 text-[#1A1A2E]">
                <p className="text-[#00ACD7] font-semibold">ゼロ値の利点</p>
                <p className="text-[#4A5568] mt-2">
                  ゼロ値の初期化により、未初期化変数によるエラーやバグを防ぎ、プログラムの安全性が向上します。
                  また、明示的な初期化が不要な場合もあり、コードの簡潔さにも貢献します。
                </p>
              </div>
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                変数のスコープ
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                変数のスコープは、その変数がアクセス可能な範囲を定義します。Go言語では、変数は宣言された場所によってスコープが決まります。
              </p>

              <CodeExample
                code={`// パッケージレベルの変数（グローバル変数）
var globalVar string = "I'm global"

func main() {
    // 関数レベルの変数（ローカル変数）
    localVar := "I'm local to main"
    
    {
        // ブロックレベルの変数
        blockVar := "I'm local to this block"
        fmt.Println(globalVar)  // アクセス可能
        fmt.Println(localVar)   // アクセス可能
        fmt.Println(blockVar)   // アクセス可能
    }
    
    fmt.Println(globalVar)  // アクセス可能
    fmt.Println(localVar)   // アクセス可能
    // fmt.Println(blockVar)   // エラー: blockVarはこのスコープでは未定義
}

func anotherFunc() {
    fmt.Println(globalVar)  // アクセス可能
    // fmt.Println(localVar)   // エラー: localVarはこのスコープでは未定義
}`}
                language="go"
                title="変数のスコープ"
              />
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                定数との違い
              </h2>
              <p className="text-[#1A1A2E] mb-4">
                変数と定数の主な違いは、変数は実行時に値を変更できるのに対し、定数は一度宣言すると値を変更できないことです。
              </p>

              <CodeExample
                code={`// 定数の宣言
const Pi = 3.14159
const MaxConnections = 100

// 変数の宣言
var radius float64 = 10.0
var connections int = 0

func main() {
    // 変数は値を変更できる
    radius = 20.0
    connections = 50
    
    // 定数は値を変更できない
    // Pi = 3.14        // コンパイルエラー
    // MaxConnections++ // コンパイルエラー
}`}
                language="go"
                title="変数と定数の違い"
              />
            </section>

            <section className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                ベストプラクティス
              </h2>
              <div className="text-[#1A1A2E] space-y-4">
                <p>
                  Go言語での変数宣言に関するベストプラクティスをいくつか紹介します：
                </p>

                <div>
                  <h3 className="text-[#00ACD7] font-semibold">
                    1. 適切な命名規則を使用する
                  </h3>
                  <p>
                    変数名はキャメルケース（最初の文字は小文字）を使用し、意味のある名前をつけましょう。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-[#F0F4F8] p-3 rounded border border-green-500/30">
                      <p className="text-green-500 font-semibold">Good</p>
                      <pre className="text-[#4A5568] mt-1">
                        <code>userID, userName, isActive</code>
                      </pre>
                    </div>
                    <div className="bg-[#F0F4F8] p-3 rounded border border-red-500/30">
                      <p className="text-red-500 font-semibold">Bad</p>
                      <pre className="text-[#4A5568] mt-1">
                        <code>userid, user_name, IsActive</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#00ACD7] font-semibold">
                    2. 変数のスコープを最小限に保つ
                  </h3>
                  <p>
                    変数は必要な最小限のスコープで宣言しましょう。これにより、コードの可読性と保守性が向上します。
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00ACD7] font-semibold">
                    3. 未使用の変数を避ける
                  </h3>
                  <p>
                    Go言語では、宣言された変数が使用されていないとコンパイルエラーになります。必要な変数だけを宣言しましょう。
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00ACD7] font-semibold">
                    4. 適切な型を選択する
                  </h3>
                  <p>
                    変数の用途に最適な型を選択しましょう。例えば、小さな整数には
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      int8
                    </code>
                    や
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      int16
                    </code>
                    を使用するなど。
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00ACD7] font-semibold">
                    5. 短縮変数宣言を適切に使用する
                  </h3>
                  <p>
                    関数内では、可能な限り短縮変数宣言（
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      :=
                    </code>
                    ）を使用しましょう。ただし、ゼロ値で初期化したい場合は
                    <code className="text-[#00ACD7] bg-[#F0F4F8]/50 px-1 rounded">
                      var
                    </code>
                    を使用します。
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 sticky top-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                目次
              </h3>
              <ul className="space-y-2 text-[#4A5568]">
                <li>
                  <a
                    href="#basic-declaration"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    基本的な変数宣言
                  </a>
                </li>
                <li>
                  <a
                    href="#short-declaration"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    短縮変数宣言
                  </a>
                </li>
                <li>
                  <a
                    href="#multiple-declaration"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    複数変数の宣言
                  </a>
                </li>
                <li>
                  <a
                    href="#zero-values"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    変数のゼロ値
                  </a>
                </li>
                <li>
                  <a
                    href="#variable-scope"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    変数のスコープ
                  </a>
                </li>
                <li>
                  <a
                    href="#constants-difference"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    定数との違い
                  </a>
                </li>
                <li>
                  <a
                    href="#best-practices"
                    className="hover:text-[#00ACD7] transition-colors duration-200"
                  >
                    ベストプラクティス
                  </a>
                </li>
              </ul>
            </div>

            <RelatedTopics
              topics={[
                { name: "定数", href: "/basic/constants" },
                { name: "データ型", href: "/basic/types" },
                { name: "型変換", href: "/basic/type-conversion" },
                { name: "演算子", href: "/basic/operators" },
                { name: "制御構文", href: "/basic/control-flow" },
              ]}
            />

            <div className="bg-white border border-[#5A189A]/20 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#00ACD7] mb-4 border-b border-[#5A189A]/20 pb-2">
                外部リソース
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://go.dev/tour/basics/8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200 flex items-center"
                  >
                    Go Tour: 変数
                  </a>
                </li>
                <li>
                  <a
                    href="https://go.dev/doc/effective_go#variables"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200 flex items-center"
                  >
                    Effective Go: 変数
                  </a>
                </li>
                <li>
                  <a
                    href="https://golang.org/ref/spec#Variables"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A5568] hover:text-[#00ACD7] transition-colors duration-200 flex items-center"
                  >
                    Go言語仕様: 変数
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
