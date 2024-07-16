import React, { useState, useEffect } from 'react';

// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias';
import PageRoot from '../../components/PageRoot';

function Home() {

    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        categoriesRepository.getAllVideos()
        .then((categoriasComVideos) => {
            setDadosIniciais(categoriasComVideos);
        })
    }, [])


    return (
        <PageRoot paddingAll={0}>
            {dadosIniciais.length === 0 && (<div>Loading...</div>)}

                 
            {dadosIniciais.map((categoria, indice) => {
                if (indice === 0) {
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoTitle={dadosIniciais[0].videos[0].titulo}
                                url={dadosIniciais[0].videos[0].url}
                                videoDescription={dadosIniciais[0].videos[0].description}
                            />
                            <Carousel
                                ignoreFirstVideo
                                category={dadosIniciais[0]}
                            />
                        </div>
                    );
                }

                return (
                    <Carousel
                        key={categoria.id}
                        category={categoria}
                    />
                );
            })}
        </PageRoot>
    );
}

export default Home;
