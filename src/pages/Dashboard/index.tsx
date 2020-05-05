import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Container, PostList, Form, Categories } from './styles';

import api from '../../services/api';

interface Post {
  _id: string;
  title: string;
  type: string;
  image_url: string;
  video_url?: string;
  synopsis: string;
  excerpt: string;
  age_restriction: number;
  categories: string;
  categoriesArr: string[];
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  async function loadPosts(category: string): Promise<void> {
    const response = await api.get(
      search ? `/categorias/${category}` : '/items',
    );

    const data = response.data.map((item: Post) => ({
      ...item,
      categoriesArr: item.categories.split(','),
    }));

    setPosts(data);
  }

  useEffect(() => {
    loadPosts(search);
  }, [search]);

  return (
    <Container>
      <Header />
      <Categories>
        <button type="button" onClick={() => setSearch('')}>
          Tudo
        </button>
        <button type="button" onClick={() => setSearch('Notícias')}>
          Notícias
        </button>
        <button type="button" onClick={() => setSearch('Séries')}>
          Séries
        </button>
        <button type="button" onClick={() => setSearch('Filmes')}>
          Filmes
        </button>
        <button type="button" onClick={() => setSearch('Novelas')}>
          Novelas
        </button>
        <button type="button" onClick={() => setSearch('Esportes')}>
          Esportes
        </button>
      </Categories>
      <PostList>
        {posts.map((post) => (
          <div key={post._id}>
            <div className="thumbnail">
              <img
                src={
                  post.image_url
                    ? `http://liampaynebr.com/wp-content/themes/liampaynebrasil/timthumb.php?src=${post.image_url}&w=500&h=500&a=c`
                    : 'https://i2.wp.com/tecnonoticias.com.br/wp-content/uploads/2020/04/Veja-como-ter-acesso-aos-conte%C3%BAdos-da-plataforma-de-streaming-Rede-Globo-sem-pagar-nada-por-isso.png?fit=1960%2C1040&ssl=1'
                }
                alt={post.title}
              />
            </div>
            <div className="content">
              <div className="title">
                <h1>
                  {post.title}
                  <span>{post.type}</span>
                </h1>
              </div>

              <div className="categories">
                {post.categoriesArr.map((category) => (
                  <span>{category}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </PostList>
    </Container>
  );
};

export default Dashboard;
