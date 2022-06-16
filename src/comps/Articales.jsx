import React, { useState } from 'react'
import { useEffect } from 'react';
import { ArticalPreview } from './ArticalPreview';

export const Articales = ({ articales }) => {

    const [viewArticals, satViewArticals] = useState(3);
    const [articalsToView, satArticalsToView] = useState(articales.slice(0, viewArticals));

    useEffect(() => {
        console.log('koral', viewArticals);
        satArticalsToView(articales.slice(0, viewArticals))
        
    }, [viewArticals])




    return (
        <div className="articales-container">
            <h2>FAQ lorem ipsum h2</h2>


            <div className="articals-rows-container">
                {articalsToView.map(artical => <ArticalPreview key={artical.id} artical={artical} />)}
            </div>

            {(viewArticals < articales.length) && <div className="load-more-container">
                <div className="line"></div>
                <div className="load-more-btn">
                    <p className="load-more" onClick={() => { satViewArticals(viewArticals + 3) }}>LOAD MORE</p>
                    <div className="arrow-load-more"></div>
                </div>
                <div className="line"></div>

            </div>}
        </div>

    )

}