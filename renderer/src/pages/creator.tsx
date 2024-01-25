
export default function Creator() {
    const markdown = (window as any).creator.markdown();
    console.log(markdown);
    return <div className="custom-scrollbar" dangerouslySetInnerHTML={{ __html: markdown }} style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }} />;
}

