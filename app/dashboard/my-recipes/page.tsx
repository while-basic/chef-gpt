import { type Metadata } from "next"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs"

import type { Database } from "@/types/supabase"
import supabaseClient from "@/lib/supabase-client"
import { RecipeCard } from "@/components/recipe-card"

/*
export const dynamic = "force-dynamic"
*/
type Recipe = Database["public"]["Tables"]["recipes"]["Row"]

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "My Recipes",
  description: "Manage your recipes history.",
}
export default async function RecipePage() {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)
  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  revalidatePath("/account")

  return (
    <>
      {recipes?.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe as Recipe} />
        </div>
      ))}
    </>
  )
}
