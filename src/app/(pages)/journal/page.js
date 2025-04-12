export default function JournalEntries({ params }) {
    return (
        <div className = "min-h-screen">
            <h1 className = "flex pt-20 justify-center">Journal Entries for: {params.user}</h1>
        </div>
    );
}