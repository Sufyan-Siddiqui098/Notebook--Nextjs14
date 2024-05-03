import AddNoteForm from "@/components/AddNoteForm";
import Notes from "@/components/Notes";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="flex min-h-screen flex-col items-center justify- py-24 px-2 sm:px-12">
        {/* Add a note form */}
        <AddNoteForm />

        {/* Notes - if presnt */}
        <Notes />
      </main>
    </>
  );
}
