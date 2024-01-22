
export default function Creator() {
    const markdown = (window as any).creator.markdown();
    console.log(markdown);
    return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
}

