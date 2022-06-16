import React, { useEffect } from 'react';
import { Header } from './Header';
import { Articales } from './Articales';

export const Main = () => {



        const articales = [
            {
                id: '1',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
            },
            {
                id: '2',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: true,
            },
            {
                id: '3',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
            },
            {
                id: '4',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
            }
        ];

    return (
        <div className="main-container">
            <Header />
            <Articales articales={articales} />
        </div>
    )

}