declare module '*.png'{
    const content: string;

    export default content;
}

declare module '*.jpg'{
    const content: string;

    export default content;
}

declare module '*.jpeg'{
    const content: string;

    export default content;
}

declare module '*.gif'{
    const content: string;

    export default content;
}

declare module '*.svg?url'{
    const content: string;

    export default content;
}

declare module '*.svg' {
    const content: React.FC<React.SVGAttributes<SVGElement>>;

    export default content;
}
