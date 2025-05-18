
import React from 'react';
import FeaturedPostCard from '@/components/FeaturedPostCard';
import PostCard from '@/components/PostCard';
import SidebarSection from '@/components/SidebarSection';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import news1 from '/cards/news1.jpg'
import news2 from '/cards/news2.svg'
import news3 from '/cards/news3.svg'
import news4 from '/cards/news4.svg'
import news5 from '/cards/news5.svg'
import pop1 from '/cards/pop1.svg'
import pop2 from '/cards/pop2.svg'
import pop3 from '/cards/pop3.svg'

// cards data
const featuredPost = {
  title: "Como é ser um desenvolvedor",
  category: "Opinião",
  author: "Fabio Tetsuo",
  imageUrl: news1,
};

const recentPostsData = [
  {
    id: 1,
    title: "Desenvolvimento mobile",
    category: "Desenvolvimento",
    author: "Fabio Tetsuo",
    date: "22 Agosto 2022",
    imageUrl: news2,
    summary: "Lorem ipsum dolor sit amet consectetur. In vitae urna commodo amet congue integer dapibus. Interdum semper mauris convallis fusce enim odio. Vitae montes ridiculus felis."
  },
  {
    id: 2,
    title: "Balancear vida profissional e pessoal",
    category: "Saúde",
    author: "Richo Satriawan",
    date: "22 Agosto 2022",
    imageUrl:   news3,
    summary: "Lorem ipsum dolor sit amet consectetur. Et consectetur at consectetur sed nisl tempor."
  },
  {
    id: 3,
    title: "Configurando VSCode",
    category: "Desenvolvimento",
    author: "Fabio Tetsuo",
    date: "22 Agosto 2022",
    imageUrl: news4,
   summary: "Lorem ipsum dolor sit amet consectetur. Erat interdum tortor ac sagittis id a etiam. Tellus vitae arcu dignissim massa aliquam vel tellus. Ipsum massa arcu nulla sed purus in ac."
  },
  {
    id: 4,
    title: "2 monitores ou 1 ultrawide?",
    category: "Produtividade",
    author: "Fulano da Silva",
    date: "22 Agosto 2022",
    imageUrl: news5,
    summary: "Lorem ipsum dolor sit amet consectetur. Arcu tellus adipiscing sagittis tristique. Eget molestie posuere enim pretium venenatis nunc ligula donec a. Velit senectus amet nulla."
  }
];

const popularPostsData = [
  // Removed author as it's not displayed and PostCard handles optional author
  { id: 1, title: "Desenvolvimento atual", date: "22 Agosto 2022", imageUrl: pop1 },
  { id: 2, title: "GitLab vs GitHub", date: "22 Agosto 2022", imageUrl: pop2 },
  { id: 3, title: "Café atrapalha?", date: "22 Agosto 2022", imageUrl: pop3 },
];

const categoriesData = [
  { name: "Saúde", count: 1, link: "#" },
  { name: "Desenvolvimento", count: 2, link: "#" },
  { name: "Produtividade", count: 2, link: "#" },
  { name: "Opinião", count: 1, link: "#" },
];

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Coluna Principal de Conteúdo (Notícia em Destaque + Posts Recentes + Posts Populares em Mobile) */}
        <div className="lg:w-2/3 space-y-12">
          {/* Notícia em Destaque */}
          <section>
            <FeaturedPostCard {...featuredPost} />
          </section>

          {/* Posts mais recentes */}
          <section>
            <div className="flex justify-between items-center bg-brand-teal-light text-white py-3 px-4 rounded-t-md">
              <h2 className="text-xl font-semibold">Posts mais recentes</h2>
              <Button
                variant="ghost"
                className="text-white hover:text-white/90 hover:bg-brand-teal-dark/20 px-3 py-1"
              >
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-b-md shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPostsData.map(post => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </section>

          {/* Posts populares (Visível apenas em mobile, após Posts Recentes) */}
          <div className="block lg:hidden mt-8"> {/* Adicionado mt-8 para espaçamento em mobile */}
            <SidebarSection title="Posts populares">
              <div className="space-y-4">
                {popularPostsData.map(post => (
                  <PostCard key={post.id} {...post} isPopular />
                ))}
              </div>
            </SidebarSection>
          </div>
        </div>

        {/* Sidebar (Posts Populares em Desktop + Categorias) */}
        <aside className="lg:w-1/3 space-y-8 mt-8 lg:mt-0">
          {/* Posts populares (Visível apenas em desktop) */}
          <div className="hidden lg:block">
            <SidebarSection title="Posts populares">
              <div className="space-y-4">
                {popularPostsData.map(post => (
                  <PostCard key={post.id} {...post} isPopular />
                ))}
              </div>
            </SidebarSection>
          </div>

          {/* Categorias */}
          {/* Esta seção aparecerá após "Posts populares" (versão mobile) em telas pequenas,
              ou após "Posts populares" (versão desktop) na sidebar em telas grandes.
              Se "Posts populares (Mobile)" não estiver presente, ela seguirá "Posts recentes" em mobile.
              Com a lógica atual, em mobile será: Featured -> Recent -> Popular (Mobile) -> Categories (da aside)
          */}
          <SidebarSection title="Categorias">
            <ul className="space-y-2">
              {categoriesData.map(category => (
                <li key={category.name} className="flex justify-between items-center">
                  <a href={category.link} className="text-gray-700 hover:text-brand-teal-dark transition-colors group flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-brand-teal-light group-hover:text-brand-teal-dark" />
                    {category.name}
                  </a>
                  <span className="text-sm text-gray-500">({category.count})</span>
                </li>
              ))}
            </ul>
          </SidebarSection>
        </aside>
      </div>
    </div>
  );
};

export default Index;
