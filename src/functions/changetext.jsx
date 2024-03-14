import { useState, useEffect } from 'react';

export const ChangeText = ({ Text1, Text2, Text3 }) => {

    const [text, setText] = useState('Initial Text');
    const texts = [Text1, Text2, Text3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [texts.length]);

    useEffect(() => {
        setText(texts[index]);
    }, [index, texts]);

    return (
        <>
         {text}
        </>
       
    )
}