import React, { useEffect } from 'react';

export const ArticalPreview = ({ artical }) => {

    const { id, articalTitel, articalParagraph, readMore } = artical;

    useEffect(() => {
        console.log('yess');
    }, [])


    return (
        <div className="artical-paragraph" key={id}>
            <div className="artical-text-container">
                <p className="p-header">{articalTitel}</p>
                <p className="p-articale">{articalParagraph}</p>
            </div>

            <div className="artical-border-bottom">
                {readMore && <div className="arrow-down-btn"></div>}
            </div>
        </div>
    )
}
