import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard';
import Head from 'next/head'

export async function getStaticProps() {
  
  const client = createClient({

    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENFUL_ACCESS_TOKEN, 
  })

  const res = await client.getEntries({
    content_type: 'recipe'
  })

  return {
    props: {
      recipes: res.items
    }
  }

}

export default function Recipes({recipes}) {
  return (
    <>
      <Head>
        <title>Home | MotsuNaru</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
          ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
        `}</style>

      </div>
    </>
  )
}