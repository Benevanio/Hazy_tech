import React from 'react';
import Article from '../../components/article/article';
import {ART1, ART2, ART3, ART4, ART5 } from './importsimgs';
import './Blog.css';

const Blog = () => (
  <div className="AI__blog section__padding" id="blog">
    <div className="AI__blog-heading">
      <h1 className="gradient__text">Muita coista esta acontecendo neste momento, <br />veja como podemos te ajudar com isso</h1>
    </div>
    <div className="AI__blog-container">
      <div className="AI__blog-container_groupA">
        <Article imgUrl={ART1} date="Jan 11, 2023" text="
          Oque é a Auto_COM?
          E como a nossa empresa pode ajudar a sua empresa crescer
        " />
      </div>
      <div className="AI__blog-container_groupB">
        <Article imgUrl={ ART2} date="Jan 11, 2023" text="Veja as nossas novas tecnologias" />
        <Article imgUrl={ART3} date="Jan 11, 2023" text="Veja os nossos novos produtos" />
        <Article imgUrl={ART4} date="Jan 11, 2023" text="Veja como nossa tecnologia esta mudando o dia a dia das pessoas" />
        <Article imgUrl={ART5} date="Jan 11, 2023" text="Conectando o mundo e as pessoas atraves da tecnologia" />
      </div>
    </div>
  </div>
);

export default Blog;