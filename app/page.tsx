import { GenerateRecipe } from "@/components/generate-recipe"

export default function IndexPage() {
  return (
    <div className="container grid items-center gap-4 py-4">
      <div className="mx-auto mb-2 flex max-w-5xl flex-col items-start gap-2 text-center md:mb-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {" Chef Genie"}
          </span>
          <h2 className="tracking-tighters text-xl font-semibold leading-tight">
            Cooking assistant powered by OpenAI and ChatGPT
          </h2>
        </h1>
      </div>
      <GenerateRecipe />
    </div>
  )
}