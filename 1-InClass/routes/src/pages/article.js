import React from 'react';
import { useParams } from 'react-router';

export default function Article() {
    let { articleId } = useParams();

    return (
        <>This is Article: {articleId}</>
    );
};