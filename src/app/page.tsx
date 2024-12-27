import { FeaturedProducts } from '@/components/products/FeaturedProducts'
import { Hero } from '@/components/home/Hero'
import { Categories } from '@/components/home/Categories'

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}