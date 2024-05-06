import React from 'react'
import BlogCard from './BlogCard'
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { useTranslation } from 'react-i18next';
const BlogHome = () => {
  const {t} = useTranslation("global")
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
      };
  return (
    <>
    <section>
    <div className='text-center font-serif'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-secondary">{t("blogHome.keep")}</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("blogHome.news")}</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-10 py-10'>
        <BlogCard
                img="hero2"
                name={t("blogCard1.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
         <BlogCard
                img="hero1"
                name={t("blogCard2.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
        <BlogCard
                img="hero3"
                name={t("blogCard3.name")}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam aliquid fugiat aut necessitatibus, adipisci aperiam assumenda sequi enim, dicta, libero reiciendis hic explicabo eos optio corporis exercitationem accusamus illo!"
                date="28 May, 2024"
              />
        </div>
        <div className='flex justify-center mt-2 mb-12'>
          <NavLink to={"/blogs"} onClick={scrollToTop}><Button name={t("offer.see")} style="hover:bg-third hover:text-primary hover:border-primary bg-primary text-white border text-xl"/></NavLink>  
        </div>
    </section>
    </>
  )
}

export default BlogHome