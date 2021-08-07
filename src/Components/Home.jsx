import React from 'react';
import Top from './Top'
import Main from './Main'
import Bottom from './Bottom'

export default function Home() {
    return (
        <div>
            <article className = "TOP">
               <Top />
            </article>

            <article className = "CONTENT">
                <Main />
            </article>

            <article className = "FOOTER">
                <Bottom />
            </article>
        </div>
    )
}
