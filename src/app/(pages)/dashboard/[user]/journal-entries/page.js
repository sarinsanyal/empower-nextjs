export default function JournalEntries({ params }) {
    return (
        <div className = "pt-30 vertical-align min-h-screen text-center">
            <h1>Journal Entries for: {"user" || params.user }</h1>
        </div>
    );
}